import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
  input,
  signal,
} from '@angular/core';

export interface GalleryImage {
  src: string;
  caption: string;
  alt: string;
  kind: 'mobile' | 'web' | 'diagram' | 'summary';
  width?: number;
  height?: number;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.html',
  styleUrl: './gallery-lightbox.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryLightboxComponent {
  readonly images = input.required<readonly GalleryImage[]>();
  readonly imageBase = input.required<string>();
  readonly label = input.required<string>();

  @ViewChild('lightbox') private lightbox!: ElementRef<HTMLDialogElement>;
  @ViewChild('lightboxClose') private lightboxClose?: ElementRef<HTMLButtonElement>;

  protected readonly selectedImage = signal<number | null>(null);
  protected readonly diagramZoomed = signal(false);
  private readonly changeDetector = inject(ChangeDetectorRef);
  private galleryTrigger: HTMLButtonElement | null = null;

  open(index: number, event: Event): void {
    this.galleryTrigger = event.currentTarget as HTMLButtonElement;
    this.diagramZoomed.set(false);
    this.selectedImage.set(index);
    this.changeDetector.detectChanges();
    this.lightbox.nativeElement.showModal();
    this.lightboxClose?.nativeElement.focus();
  }

  protected close(): void {
    this.lightbox.nativeElement.close();
  }

  protected onClosed(): void {
    this.selectedImage.set(null);
    this.diagramZoomed.set(false);
    this.galleryTrigger?.focus();
    this.galleryTrigger = null;
  }

  protected move(step: number): void {
    const current = this.selectedImage();
    if (current !== null) {
      this.diagramZoomed.set(false);
      this.selectedImage.set((current + step + this.images().length) % this.images().length);
    }
  }

  protected toggleDiagramZoom(): void {
    this.diagramZoomed.update((zoomed) => !zoomed);
  }

  @HostListener('document:keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    if (!this.lightbox?.nativeElement.open) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }
}
