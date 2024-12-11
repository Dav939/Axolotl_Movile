export interface Datos {
    id: string;
    data: Personajes;
}
export interface Datosc {
    id: string;
    data: Controles;
}
export interface Datosi {
    id: string;
    data: Items;
}
export interface Datosm {
    id: string;
    data: Mercancia;
}

export interface Controles {
    camara: string;
    cuerpoacuerpo: string;
    curacion: string;
    disparo: string;
    evasion: string;
    interacciones: string;
    inventario: string;
    linterna: string;
    movimiento: string;
    pausa: string;
    recargar: string;
    sigilo: string;
}


export interface Items {
    descripcion: string;
    efecto: string;
    nombre: string;
    imagen: string;
}

export interface Mercancia {
    articulo: string;
    descripcion: string;
    metodo: string;
    precio: number;
    imagen: string;
}

export interface Personajes {
    armabase: string;
    armas: number;
    armasecundaria: string;
    dano: number;
    descripcion: string;
    imagen: PerformanceServerTiming;
    nombre: PerformanceServerTiming;
    salud: number;
    velocidad: number;
    rol: string;
}

//modal

export interface RespuestaDetalle {
    id: string;
    data: Personajes;
}   
