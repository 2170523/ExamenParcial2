const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from alumnos',(err,alumnos) =>{
            if(err){
                res.json(err);
            }
            res.json(alumnos);
        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into alumnos set?', [data], (err,alumnos) => {
        res.json(alumnos);
       });
   })
};

controller.edit = (req, res) => {

    const {cuen_est}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from alumnos where cuen_est=?', [cuen_est], (err,estudiantes) => {
            res.json(alumnos[0]);

        });

    });

};



controller.update = (req,res) =>{

    const {cuen_est}= req.params;
    const nuevo_estudiantes = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update estudiantes set ? where cuen_est =?', [nuevo_estudiantes, cuen_est], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {cuen_est}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update estudiantes set estado="Inactivo" where cuen_est =?', [cuen_est], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
