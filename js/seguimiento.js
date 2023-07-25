const { createApp } = Vue;

// Crea una instancia de la aplicación Vue
createApp({
  data() {
    /* El código define una instancia de la aplicación Vue. Aquí se especifican los datos utilizados por la aplicación, incluyendo la lista de productos, la URL del backend, indicadores de error y carga, así como los atributos para almacenar los valores del formulario de producto.
     */
    return {
      seguimiento: [], // Almacena los productos obtenidos del backend
      // url:'http://localhost:5000/productos', // URL local
      url: "https://ccolombo.pythonanywhere.com/seguimiento", // URL del backend donde se encuentran los productos
      error: false,
      cargando: true,
      // Atributos para el almacenar los valores del formulario
      id: 0,
      nombre: "",
      apellido: "",
      estado: 0,
      fecha: "",
      search:0,
    };
  },
  methods: {
    fetchData(url) {

      fetch(url)
        .then((response) => response.json()) // Convierte la respuesta en formato JSON
        .then((data) => {
          // Asigna los datos de los productos obtenidos al arreglo 'productos'
          this.seguimiento = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },

    searchData() {
      const input = document.getElementById("search");
      const texto = document.getElementById("txt-progreso");
      const holanombre = document.getElementById("holanombre");
      const ordenN = document.getElementById("ordenN");
      const error = document.getElementById("error");

      input.disabled = true;
      let search = this.search;
      data = this.seguimiento;
      var coincidencia = [];

      for (i=0;i<data.length;i++) {
        if (data[i].id == search) {
          coincidencia = data[i];

          const uno = document.querySelector(".uno");
          const dos = document.querySelector(".dos");
          const tres = document.querySelector(".tres");
          const cuatro = document.querySelector(".cuatro");
   
          if (data[i].estado == 1){

            uno.classList.add("active");
            dos.classList.remove("active");
            tres.classList.remove("active");
            cuatro.classList.remove("active");
          }
   
          if (data[i].estado == 2){
            uno.classList.add("active");
            dos.classList.add("active");
            tres.classList.remove("active");
            cuatro.classList.remove("active");
          }
   
          if (data[i].estado == 3){
            uno.classList.add("active");
            dos.classList.add("active");
            tres.classList.add("active");
            cuatro.classList.remove("active");
          }
   
          if (data[i].estado == 4){
            uno.classList.add("active");
            dos.classList.add("active");
            tres.classList.add("active");
            cuatro.classList.add("active");
          }

          texto.style.display="flex";
          holanombre.style.display ="flex";
          ordenN.style.display="flex";
          error.style.display="none";
          
          holanombre.textContent = `HOLA, ${coincidencia.nombre.toUpperCase()}! `;
          ordenN.textContent = `Orden N° ${coincidencia.id}`;
        }
      }
      const found = data.find(elemento => elemento.id == search );
      if (found == undefined) {
        error.textContent = `El código ingresado es INCORRECTO`;

        holanombre.style.display ="none";
        ordenN.style.display="none";
        error.style.display = "flex";
        texto.style.display="inline-flex";
      }
      
    },


  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
