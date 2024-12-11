# iniciar cliente: npm run dev
# SISTEMA DE CARPETAS
>SRC

 > ASSETS => imagenes, logos, elementos secundarios de la la app
 
 > COMPONENTS => components utilizados por las rutas definidas
 
 > ROUTES => sistema de rutas, autenticacion y autorizacion
 >
  >APPROUTER => todas las rutas definidas de la app
  
  >HELPERROUTES => objeto con todas las rutas definidas y por definir == PONER LAS NUEVAS RUTAS AQUI
  
  > AUTH => autenticacion y autorizacion del usuario
  
  > PRIVATEADMIN , PUBLICROUTE , PRIVATEADMIN => sistema de proteccion de rutas

  >-ViewAdmin

  >-ViewHome  => Sistema de archivos que seran el archivo principal de cada ruta

  >-ViewEtc
  
 > REDUX => utilizarlo solo en el caso de necesitar estados globales
 
  >ACTIONTYPES => definir los nombres de las acciones para modularizar el codigo
  
 > HOOKS => optmizar codigo para evitar la duplicacion del mismo
 
 > importarlos donde se van a usar, ejemplo: {user} = useAuth() , useForm(), useFetch()


 
