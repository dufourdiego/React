import Procesador from "../img/procesador.jpg";
import Motherboard from "../img/mother.jpg";
import Memoria16 from "../img/memoria16.jpg";
import DiscoSSD from "../img/disco.jpg";
import Gabinete from "../img/gabinete.jpg";
import Fuente from "../img/fuente.jpg";
import Video from "../img/video.jpg";
import Monitor from "../img/monitor.jpg";
import Teclado from "../img/teclado.jpg";
import Mouse from "../img/mouse.jpg";
import Parlante from "../img/parlante.jpg";
import Auricular from "../img/auricular.jpg";


export const productosHC = [
    {
      id: 1,
      nombre: "Procesador",
      desc: "Intel Core i3",
      detail: "Marca : Intel Línea : Core i3 Modelo : i3-10105 Modelo alfanumérico : BX8070110105UPC : 735858477178 GPU integrado : Gráficos UHD Intel 630 Caché : 6 Cantidad de núcleos de CPU : 4 Hilos : 8 Tipos de memoria RAM soportadas : DDR4 Cantidad de RAM soportada : 128 GB Socket : LGA 1200 Frecuencia mínima de reloj : 3,70 GHz Frecuencia máxima de reloj : 4,40 GHz Desbloqueado para OC : No TDP : 65W",
      precio: 20000,
      pictureURL: Procesador,
      category: "Componentes",
      cantidad: 10
    },
    {
      id: 2,
      nombre: "Motherboard",
      desc: "ASUS H510",
      detail: "Marca : ASUS Modelo : Prime H510M-E UPC : 195553127769 Socket : LGA1200 Chipset : Intel H510 Fuente : ATX Memoria : 2 x DIMM, Max. 64GB, DDR4 3200(OC)/2933/2800/2666/2400/2133 Pci-e x16 : 1 Pci-e x1 : 2 Pci : No Vga : 1 Dvi : No Hdmi : 1 DisplayPort : 1 Sonido : Realtek ALC897 Red : 10/100/1000*1 Ps2 : 2 Usb traseros : 4 ( 2 x 2.0 + 2 x 3.2 ) Usb internos : 6 ( 4 x 2.0 + 2 x 3.2 ) Wifi : No Bluetooth : No Optica : No Iluminacion : No E-sata : No Lpt : No Com : No Sata : 4 x Sata 3 M.2 : 1 Raid : No SLI : No Crossfire : Si Formato : micro ATX Dimensiones : 22,6 cm x 21,1 cm",
      precio: 15000,
      pictureURL: Motherboard,
      category: "Componentes",
      cantidad: 10
    },
    {
      id: 3,
      nombre: "Memoria DDR4",
      desc: "KINGSTON 16GB 3200",
      detail: "Marca : Kingston Línea : Fury Beast Modelo : KF432C16BBA/16 UPC : 740617319439 Tipo : DIMM Latencia : 16 Voltaje : 1.35V Capacidad : 16 GB Velocidad : 3200 MHz Tecnología : DDR4 (288 pines) Aplicación : PC Color : Negro Disipador : Si Iluminacion : RGB",
      precio: 10000,
      pictureURL: Memoria16,
      category: "Componentes",
      cantidad: 5
    },
    {
      id: 4,
      nombre: "Disco SSD",
      desc: "KINGSTON A400 480GB",
      detail: "Marca : Kingston P/N : SA400S37/480G Capacidad : 480GB Factor de forma : 2.5inch. Velocidad de lectura : 500MB/seg Velocidad de escritura : 320MB/seg Interfaz : SATA Rev. 3.0 (6Gb/seg) con compatibilidad inversa para SATA Rev. 2.0 (3Gb/seg) Dimensiones : 100.0 x 69.9 x 7.0 mm",
      precio: 10000,
      pictureURL: DiscoSSD,
      category: "Componentes",
      cantidad: 6
    },
    {
      id: 5,
      nombre: "Gabinete",
      desc: "Gamemax RGB con cooler",
      detail: "Marca : Gamemax Modelo : Mini Abyss H608 P/N : MFG.H608 UPC : 6931858771146 Formatos de mother compatibles : Mini iTX, Micro ATX Iluminacion : RGB Cooler Superior soportado : 2 x 120 mm (No incluídos) Cooler Frontal soportado : 3 x 120 mm (No incluidos) Cooler Trasero soportado : 1 x 120 mm (incluido) Cooler Inferior soportado : No Dimensiones : 403 x 193 x 415 mm Peso : 3,6 kg",
      precio: 13000,
      pictureURL: Gabinete,
      category: "FuentesyGabinetes",
      cantidad: 3
    },
    {
      id: 6,
      nombre: "Fuente",
      desc: "Gamemax 650W 80 Plus Bronze",
      detail: "Marca : Gamemax Modelo : VP-650 P/N : VP-650 Color : Negro Nivel de Ruido : Cero (ECO-ON),<32dBA (a 100%) Formato : Intel ATX 12 V 2.31 Dimensiones : 140 mm x 150 mm x 86 mm Tamaño del ventilador : 120 mm Rodamiento del ventilador : Rodamiento fluido dinámico Cables mallados : Si Temperatura operativa : 0 Entrada: Full Range AC (100-240Vac) Protecciones : OPP, OVP, UVP, OCP, OTP, SCP Salidas : +3.3v (20A), +5V (20A), +12V (48A), -12V (0.5A) +5VSB (2.5A) Conector 24 pines : Sí",
      precio: 9000,
      pictureURL: Fuente,
      category: "FuentesyGabinetes",
      cantidad: 12
    },
    {
      id: 7,
      nombre: "Placa de video",
      desc: "ASUS GeForce RTX 3090",
      detail: "Marca : ASUS AModelo : GeForce RTX 3090 FTW3 ULTRA GAMING P/N : 24G-P5-3987-KR UPC : 4250812438171 Chipset : NVIDIA RTX 3090 Coolers : 3 Pci Express : PCIe 4.0 16x DirectX : 12 OpenGl : 4.6 Memoria : GDDR6 24GB Bits : 384 CUDA Cores : 10496 Core Clock : 1800 MHz Mem Clock : 19500 MHz Alimen. Suple : 3 x 8-pin Fuente optima : 750w Vga : No Dvi : No Hdmi : 1 Display Port : 3",
      precio: 130000,
      pictureURL: Video,
      category: "Componentes",
      cantidad: 8
    },
    {
      id: 8,
      nombre: "Monitor ASUS",
      desc: "ASUS 24 pulgadas",
      detail: "Marca : ASUS Modelo : VG248QG P/N : 90LMGG901Q022EUL UPC : 192876341186 Color : Negro Tamaño de panel : 24inch Curvo/Plano : Plano Colores : 16.7M Tipo de panel : TN Resolución : 1920 x 1080 Brillo(Max) : 350cd/m2 Ángulo de vision : 170 grados / 160grados Parlantes : 2Wx2 Conectividad : 1 x Display Port, 1 x HDMI, 1 x D-SUB, 1 x miniplug Frecuencia de actualizacion : 165Hz Tiempo de respuesta (ms) : 0.5 msVoltaje : 100-240 V, 50/60 Hz Inclinación : +33 a -5 grados Giratorio : +60 a -60 gradosPivote : +90 a -90 grados Ajuste en altura : 0 a 130mm VESA : 100 x 100 mm Bloqueo Kensington : Si Freesync/Gsync : Gsync Dimensiones: 561 x (359~489) x 211 mm",
      precio: 80000,
      pictureURL: Monitor,
      category: "Monitores",
      cantidad: 4
    },
    {
      id: 9,
      nombre: "Teclado Gamer",
      desc: "Logitech G915",
      detail: "Marca : Logitech Modelo : G915 TKL Tactile P/N: 920-009495 UPC : 097855155757 Color : Negro Peso : 810 g Distribucion : Ingles Tamaño del enter : Chico Retroiluminación del teclado : RGB Switch : Logitech GL Tactil de perfil bajo Interruptores : Mecánico Conectividad del teclado : USB inalámbrico Tamaño (Full / TKL) : TKL",
      precio: 30000,
      pictureURL: Teclado,
      category: "Perifericos",
      cantidad: 15
    },
    {
      id: 10,
      nombre: "Mouse Gamer",
      desc: "Redragon M988 USB",
      detail: "Marca : Redragon Modelo : M988 Rgb Storm Elite P/N : M988-RGB UPC : 6950376778536 Botones Programables: 8 Tipo de agarre: Palm, Claw Orientación: Derecho Cable: mallado de 1.8 m Conexión: cableado USB Modelo Sensor: Pixart 3389 óptico Switches: Omron/20 millones de clicks Retroiluminación: Sí, RGB Chroma DPI Mínimo: 100DPI Máximo: 16000 Frecuencia de respuesta: 125 Hz / 1000 Hz Dimensiones: 12.7 x 6.6 x 4 cm",
      precio: 9000,
      pictureURL: Mouse,
      category: "Perifericos",
      cantidad: 12
    },
    {
      id: 11,
      nombre: "Parlantes Bluetooth",
      desc: "Logitech Z607",
      detail: "Marca : Logitech Modelo : Z607 Potencia de salida (RMS) : 80 W S/N : 1849FC65969 Control : si Bluetooth : si Radio FM : sí Diseño del parlante : PC Lector memoria : si (HASTA 32 GB) Entradas : RCA Subwoofer : Altura x Anchura x Profundidad, 297 mm x 193 mm x 267 mm Peso : 3,5 Kg Altavoces satélite : Altura x Anchura x Profundidad, 178 mm x 110 mm x 93 mm Peso : 0,45 Kg",
      precio: 34000,
      pictureURL: Parlante,
      category: "Perifericos",
      cantidad: 6
    },
    {
      id: 12,
      nombre: "Auriculares Gamer",
      desc: "HyperX Cloud Stinger Rojo",
      detail: "Marca : HyperX Modelo : Cloud Stinger Código : HX-HSCS-BK/NA P/N : 4P5L7AA Conexión : 3.5mm x1 o 3.5mm x2 (auricular y micrófono) Potencia : 150mW estimada, 300mW máx. Medida de Cable : 2 Mts. Compatibilidad : XboxOne y Windows",
      precio: 8500,
      pictureURL: Auricular,
      category: "Perifericos",
      cantidad: 12
    }
  ]