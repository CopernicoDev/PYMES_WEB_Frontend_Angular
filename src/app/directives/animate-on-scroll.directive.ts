import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, NgZone } from '@angular/core'; // 👈 1. Importa NgZone

@Directive({
    selector: '[appAnimateOnScroll]',
    standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
    @Input() enterClass: string = '';
    @Input() leaveClass: string = '';
    @Input() root: HTMLElement | null = null;
    @Input() rootMargin: string = '0px';
    @Input() threshold: number = 0.1;
    @Input() once: boolean = false;

    private observer: IntersectionObserver | null = null;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private ngZone: NgZone // 👈 2. Inyéctalo en el constructor
    ) { }

    ngOnInit() {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            this.applyClasses(this.enterClass, this.leaveClass);
            return;
        }

        const options = {
            root: this.root,
            rootMargin: this.rootMargin,
            threshold: this.threshold
        };

        // 👈 3. Ejecuta el observer fuera de la zona de Angular
        this.ngZone.runOutsideAngular(() => {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.applyClasses(this.enterClass, this.leaveClass);
                        if (this.once) {
                            this.observer?.unobserve(this.el.nativeElement);
                        }
                    } else if (!this.once) {
                        this.applyClasses(this.leaveClass, this.enterClass);
                    }
                });
            }, options);

            this.observer.observe(this.el.nativeElement);
        });
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    private applyClasses(classesToAdd: string, classesToRemove: string) {
        const toAdd = classesToAdd ? classesToAdd.split(' ').filter(c => c.trim().length > 0) : [];
        const toRemove = classesToRemove ? classesToRemove.split(' ').filter(c => c.trim().length > 0) : [];

        toRemove.forEach(cls => {
            this.renderer.removeClass(this.el.nativeElement, cls);
        });

        toAdd.forEach(cls => {
            this.renderer.addClass(this.el.nativeElement, cls);
        });
    }
}
