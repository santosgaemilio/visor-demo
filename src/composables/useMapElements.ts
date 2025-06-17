/* NOTE: Rafa, para saber por que los markadores y otros elementos van aquí
 * checa la página de composables en la documentación de Vue. Básicamente lo que
 * está pasando es => useMapElements.ts entrega funciones que definen elementos en
 * MainMap.vue */
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onUnmounted } from 'vue'

export function useMapElements(map: L.Map | null) {
  let parkMarkers: L.LayerGroup | null = null
  let randomPolygons: L.LayerGroup | null = null
  const markOfPassage = 'we were here'
  /*NOTE: Cada vez que se quieran mostrar las layers se va a checar si no son null, si
   * son null simplemente se crean. Solamente se van a crear una vez no importa cuantas
   * veces se llamen las funciones "show"*/
  const initMarkers = () => {
    parkMarkers = L.layerGroup([
      L.marker([25.67723, -100.22024]).bindPopup('Parque ecológico Río la Silla'),
      L.marker([25.6673, -100.213448]).bindPopup('CEDEREG'),
      L.marker([25.68032, -100.2046]).bindPopup('Parque PIPO'),
    ])
    console.log('markers made')
  }

  const initPolygons = () => {
    randomPolygons = L.layerGroup([
      L.polygon(
        [
          [25.67723, -100.22024],
          [25.6673, -100.213448],
          [25.68032, -100.2046],
        ],
        { color: 'red' },
      ).bindPopup('Área entre parques'),
      L.polygon(
        [
          [25.68406, -100.21898],
          [25.68879, -100.21313],
          [25.68081, -100.20522],
          [25.67561, -100.21516],
        ],
        { color: 'blue' },
      ).bindPopup('Infonavit la Joya'),
    ])
    console.log('polygons made')
  }

  onUnmounted(() => {
    parkMarkers?.remove()
    randomPolygons?.remove()
  })

  const showParkMarkers = () => {
    if (!parkMarkers) initMarkers()
    parkMarkers?.addTo(map!)
  }
  const hideParkMarkers = () => parkMarkers?.remove()

  const showRandomPolygons = () => {
    if (!randomPolygons) initPolygons()
    randomPolygons?.addTo(map!)
  }
  const hideRandomPolygons = () => randomPolygons?.remove()

  return {
    showParkMarkers,
    hideParkMarkers,
    showRandomPolygons,
    hideRandomPolygons,
    markOfPassage,
  }
}
