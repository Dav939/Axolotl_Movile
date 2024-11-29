export interface Datos {
    id: string;
    data: Personajes;
}

export interface Controles {
    ataque: string;
    movimiento: string;
    rotacion: string;
}


export interface Items {
    descripcion: string;
    efecto: string;
    nombre: string;
}

export interface Mercancia {
    articulo: string;
    descripcion: string;
    precio: number;
}

export interface Personajes {
    armabase: string;
    armas: number;
    armasecundaria: string;
    daño: number;
    descripcion: string;
    imagen: PerformanceServerTiming;
    nombre: PerformanceServerTiming;
    salud: number;
    velocidad: number;
}