function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes || [];
}

Consultorio.prototype.agregarPaciente = function (paciente) {
    this.pacientes.push(paciente);
}

Consultorio.prototype.mostrarPacientes = function () {
    this.pacientes.map(function (paciente) {
        console.log(`Nombre: ${paciente._getNombre}   Edad: ${paciente._getEdad}  Rut: ${paciente._getRut}   Diagnostico: ${paciente._getDiagnostico}`);
    })
}

Consultorio.prototype.buscarPaciente = function (nombre) {
    var encontrado = false
    this.pacientes.map(function (paciente) {
        if(paciente._getNombre == nombre) {encontrado = true }
    })

    if(encontrado == true) { 
        console.log(`El paciente "${nombre}" se encuentra en el listado`);
    }else{
        console.log(`El paciente "${nombre}" no se encuentra en el listado`);
    } 
    

}

function Persona(nombre, edad, rut, diagnostico) {
    var _Nombre = nombre;
    var _Edad = edad;
    var _Rut = rut;
    var _Diagnostico = diagnostico;

    Object.defineProperty(this, '_getNombre',        { get: function () {  return _Nombre } });
    Object.defineProperty(this, '_getEdad',          { get: function () {  return _Edad   } });
    Object.defineProperty(this, '_getRut',           { get: function () {  return _Rut    } });
    Object.defineProperty(this, '_getDiagnostico',   { get: function () {  return _Diagnostico } });

    Object.defineProperty(this, '_setNombre',       { set: function (nombre) { _Nombre = nombre }});
    Object.defineProperty(this, '_setEdad',         { set: function (edad) { _Edad = edad } });
    Object.defineProperty(this, '_setRut',          { set: function (rut) { _Rut = rut } });
    Object.defineProperty(this, '_setDiagnostico',  { set: function (diagnostico) { _Diagnostico = diagnostico } });

}

Persona.prototype.getNombre = function(){ return this._getNombre }
Persona.prototype.getEdad = function(){ return this._getEdad }
Persona.prototype.getRut = function(){ return this._getRut }
Persona.prototype.getDiagnostico = function(){ return this._getDiagnostico }

Persona.prototype.setNombre = function(nombre){ this._setNombre = nombre }
Persona.prototype.setEdad = function(edad){ this._setEdad = edad }
Persona.prototype.setRut = function(rut){ this._setRut = rut }
Persona.prototype.setDiagnostico = function(diagnostico){ this._setDiagnostico = diagnostico}



p1 = new Persona("persona 1", 10, "12345-6", "enfermedad 1")
p2 = new Persona("persona 2", 20, "12345-7", "enfermedad 2")
p3 = new Persona("persona 3", 30, "12345-8", "enfermedad 3")
p4 = new Persona("persona 4", 40, "12345-9", "enfermedad 4")
p5 = new Persona("persona 5", 50, "12345-0", "enfermedad 5")

// Mostrar personas
console.log(p1);
console.log(p2);
console.log(p3);


c1 = new Consultorio('Santiago', [p1, p2, p3]) // Crear instancia
console.log(c1); // Mostrar consultorio

c1.agregarPaciente(p4) // Agregar persona al consultorio usando el metodo creado
c1.agregarPaciente(p5)

p4.setNombre("Paciente 00") // Modificar 

console.log(c1);

c1.mostrarPacientes() // Mostrar todos los pacientes

//c1.buscarPaciente("Paciente 00") // Metodo de busqueda --> OK
c1.buscarPaciente("Paciente xx") // Metodo de busqueda --> !OK
