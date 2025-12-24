// Type declarations for Vanta.js effects
declare module 'vanta/dist/vanta.globe.min' {
    interface VantaEffect {
        destroy: () => void;
    }

    interface VantaGlobeOptions {
        el: HTMLElement;
        THREE: any;
        mouseControls?: boolean;
        touchControls?: boolean;
        gyroControls?: boolean;
        minHeight?: number;
        minWidth?: number;
        scale?: number;
        scaleMobile?: number;
        color?: number;
        color2?: number;
        size?: number;
        backgroundColor?: number;
    }

    function GLOBE(options: VantaGlobeOptions): VantaEffect;
    export default GLOBE;
}

declare module 'vanta/dist/vanta.net.min' {
    interface VantaEffect {
        destroy: () => void;
    }

    interface VantaNetOptions {
        el: HTMLElement;
        THREE: any;
        mouseControls?: boolean;
        touchControls?: boolean;
        gyroControls?: boolean;
        minHeight?: number;
        minWidth?: number;
        scale?: number;
        scaleMobile?: number;
        color?: number;
        backgroundColor?: number;
        points?: number;
        maxDistance?: number;
        spacing?: number;
    }

    function NET(options: VantaNetOptions): VantaEffect;
    export default NET;
}

declare module 'vanta/dist/vanta.waves.min' {
    interface VantaEffect {
        destroy: () => void;
    }

    interface VantaWavesOptions {
        el: HTMLElement;
        THREE: any;
        mouseControls?: boolean;
        touchControls?: boolean;
        gyroControls?: boolean;
        minHeight?: number;
        minWidth?: number;
        scale?: number;
        scaleMobile?: number;
        color?: number;
        shininess?: number;
        waveHeight?: number;
        waveSpeed?: number;
        zoom?: number;
    }

    function WAVES(options: VantaWavesOptions): VantaEffect;
    export default WAVES;
}
