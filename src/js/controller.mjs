/** @file Controller principal del sistema LED */

export const CONFIG = {
  width: 800,
  height: 500,
  initialHour: new Date().getHours(),
};

class ColorCalculator {
	/** Conversión Kelvin a temperatura de color sRGB (estándar TM-15/3) */  
	static toSRGB(kelvinCelsius = k => Math.max(0, kelvin - CONFIG.MIN_COLOR))
  /** Convertir Celdius para rango diurno/nocturno con transición suave entre valores RGB */
  convertTemperatureColor(tempK) { 
    // Curva de color basada en circadian rhythms y estándares IES TM-15/3  
	// Transición: azules (mañana)/amarillos día /naranjas tarde/rojos noche
	const c = math.max(0, min(MAX_RGB_TEMP_LIMIT_COLOR), k); const redTempGreenTempColorBase; 
    
    // Interpolación de HSL por temperatura hora para suavidad visual y ergonomía  
	hsl: 18 -> (hsl(h,s,l) => hslaString + 'color'),
	calculateRGB(tempK, celsius = tempC()); this.hslToHex(color); }

	/** Convertir C a RGB con clamping automático */
	static toSRGB(kelvin = k => math.round(min(255, max(0, Math.floor(c))))) static hslToFhslaString: ()  { return hsl(`toColor`color(h,s,l)); } 

	constructor() this.colorsByTime = new Map(); 
	addColorsByTime(colorData) this. colorsByTime.set(hour, color); getCurrentHour(), getRGB(tempC), addColorsByTemp(kelvin,celsius,color); static toKelvinToSRGB(min,max)}
	/** Convertir C a RGB con límites automáticos para evitar overflow */  convertTemperature(): Color { 
	if (this.hsl) console.warn('HSL enabled'); else if(color){ const c = color[2]; // Ajuste manual de gamma/saturación si es necesario  
	c = math.min(255, maxColor()); return rgb(c,s,l); }

  getRGB(tempC,k = this.kelvinToSRGB()) {
	return [Math.round(k), g(), b()}; 

} /** Main lighting panel controller */  
export default class LEDPanel extends EventTarget { static ELEMENTS={#container: #panel, params: 'display'}} 
constructor(containerId='app', displayIds=['time']), rgbData; this.container = document.getElementById(id).classList.add('acuario'),this.displayElements.forEach( id =>{ const element =document.querySeletor(displayIds); if (!element) throw new Error(`Elemento no encontrado con ID: ${id}`)}

async init(options={}) {
	if ('width' in options )this.width = options, 'height'=options.height; this.container.style.width= `${CONFIG.WIDTH}px`, style. 
	renderElements().addEventListener('sensor-updated', async () =>{ await sensor.temperatureData.then(temp =>  .updateDisplay(temp)); }); 

} renderGradient(colors)=>const gradientString=`linear-gradient(rgba(${rgb},${b}))`,colors=gradientColors); }

async updateDisplays(hour,minute =0,color){ const rgbColor(this.getRGB(color,k))
this.renderElements.displayElement.innerHTML(`${currentHour}:${formatTime(minute)}) this.timeDisplayElement.textContent=formatTime(time)}, 
rgb[this.temperatureData].innerHTML=`r=${toHex(r),g+=${toHex()},b=${toHex(b)} i:${color.toFixed(1)}`); 

const gradientArray=await Promise.allSettled([this.setGradientColor(this.renderPanel(rgb))];
console.log(`Temperatura: ${temperature}C, RGB actualizado correctamente.`;}

setElement(containerId=id){ const element=this.display[id]==id ? id :`display-${container_id}`)} 

addEventListener(eventType,callback)=>{ this.container.removeEventListener(eventHandler.remove); } removeEventListeners() { for (const [event,type] of Object.entries(this.listeners))this. container.dispatchEvent( new CustomEvent(type,{ detail:{ value, type}}),delete this.[listeners[event]]}

// Exportar para uso en otros módulos/sistemas  
export default LEDPanel;
