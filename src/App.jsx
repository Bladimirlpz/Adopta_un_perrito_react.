import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header titulo="Adopta un Perrito"/>
    <div className="grid">
      <MyCard 
        nombre="Gordo" 
        descripcion="Es jugueton, amigable y se lleva bien con niños y otros animales, legusta jugar mordiendo las patitas."  
        img="./src/assets/img/gordo.jpg"
        raza="bulldog" 
        color="primary"/>
      <MyCard 
        nombre="Bartolo" 
        descripcion="Lleno de energia y listo para jugar, ¡Dale a Bartolo el hogar amoroso que se merece!"  
        img="./src/assets/img/bartolo.jpg"
        raza="Husky" 
        color="success"/>
      <MyCard 
        nombre="Gohan" 
        descripcion="Un perro de tamaño mediano con un corazon gigante. Hazte amigo de Gohan y experimenta un amor incondicional"  
        img="./src/assets/img/gohan.jpg"
        raza="Shar Pei" 
        color="danger"/>
      <MyCard 
        nombre="Princesa" 
        descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"  
        img="./src/assets/img/princesa.jpg"
        raza="Beagle" 
        color="warning"/>      
    </div>
    <Footer descripcion="Explora nuestra galeria de perros para encontar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura se esencia unica. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre."/>
    </>

  )
}

export default App
