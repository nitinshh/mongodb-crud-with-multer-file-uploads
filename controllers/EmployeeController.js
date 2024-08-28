const Employee = require('../models/Employee')


// show the list of Employees
module.exports ={
    list : (req, res, next)=>{
        Employee.find()
        .then(response =>{
            res.json({
                response
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error occured in index'
            })
        })
    },
    
    
    // show single employee
    
    show : (req, res, next)=>{
        let employeeID = req.body.employeeID
        Employee.findById(employeeID)
        .then(response =>{
            res.json({
                response
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error occured in show'
            })
        })
    },
    
    
    // add new employee
    
    store : (req, res, next)=>{
        let employee = new Employee({
            name: req.body.name,
            designation: req.body.designation,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age
        })

        // -------------in case of uploading picture----------------

        if(req.file){
            employee.picture = req.file.path
        }

        //-----------------------------------------------



        /* -------------in case of uploading multiple picture----------------

        if(req.file){
            let path = ''
            req.files.forEach(function(files, index, error){
                path = fpath + files.path + ','       // it will save the file with comma-separated
            })
            path = path.substring(0, path.lastIndexOf(","))   // remove last comma
            employee.picture = path
        }

        -----------------------------------------------------------------------*/

        employee.save()
    
        .then(response =>{
            res.json({
                message: 'Employee Added successfully'
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error occured while adding an employee'
            })
        })
    },
    
    
    // update an employee
    
    update : (req, res, next)=>{
        let employeeID = req.body.employeeID
    
        let updateData = {
            name: req.body.name,
            designation: req.body.designation,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age
        }
       Employee.findByIdAndUpdate(employeeID, {$set: updateData}, {new: true})

       /*findOneAndUpdate: This method, as the name suggests, finds a document, updates it,
        and returns the updated document. By default, it returns the document before the update.
        If you want the document after the update, set the new option to true.*/
    
        .then(()=>{
            res.json({
                message: 'Employee Updated Successfully'
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error occured while updating'
            })
        })
    },
    
    
    // Delete an employee
    
    destroy : (req, res, next)=>{
        let employeeID = req.body.employeeID
        Employee.findOneAndDelete(employeeID)
        .then(()=>{
            res.json({
                message: 'Employee deleted successfully'
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error occured while deleting'
            })
        })
    } 
}
