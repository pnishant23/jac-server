const express = require('express');
const { model } = require('mongoose');
const Model = require('../models/model')
const {announcements, circular, OpeningPermissionColleges, RecommendToGovCollege, RecognisedCollege,
    OpeningPermissionSchool, RecognisedSchool, RecommendToGovSchool, Examinationprogramme, ExamFees, JAC_Acts, JAC_Rules, RTI_Acts_and_Rules,
    Results
} = require("../data")

const router = express.Router()

// JAC Endpoints

router.get('/exam-fees', (req, res)=>{
    res.json(ExamFees)
})
router.get('/announcements', (req, res)=>{
    res.json(announcements)
})
router.get('/circulars', (req, res)=>{
    res.json(circular)
})
router.get('/opening-permission-colleges', (req, res)=>{
    res.json(OpeningPermissionColleges)
    console.log('opening-permission-colleges')
})
router.get('/recommend-to-government-colleges', (req, res)=>{
    res.json(RecommendToGovCollege)
    console.log('recommend-to-government-colleges')
})
router.get('/recognised-colleges', (req, res)=>{
    res.json(RecognisedCollege)
    console.log('recognised-colleges')
})
router.get('/recognised-schools', (req, res)=>{
    res.json(RecognisedSchool)
    console.log('recognised-schools')
})
router.get('/recommend-to-government-schools', (req, res)=>{
    res.json(RecommendToGovSchool)
    console.log('recommend-to-government-schools')
})
router.get('/opening-permission-schools', (req, res)=>{
    res.json(OpeningPermissionSchool)
    console.log('opening-permission-schools')
})
router.get('/examination-programmes', (req, res)=>{
    res.json(Examinationprogramme)
    console.log('examination-programmes')
})
router.get('/jac-acts', (req, res)=>{
    res.json(JAC_Acts)
    console.log('jac-acts')
})
router.get('/jac-rules', (req, res)=>{
    res.json(JAC_Rules)
    console.log('jac-rules')
})
router.get('/rti-acts-and-rules', (req, res)=>{
    res.json(RTI_Acts_and_Rules)
    console.log('rti-acts-and-rules')
})
router.get('/results', (req, res)=>{
    res.json(Results)
    console.log('results')
})
//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find()
        res.json(data)
        // console.log(data)
    } catch (error) {
        res.status(400).json({message:error.message})        
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
    const data = await Model.findById(req.params.id)
    res.json(data)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
   try {
    const id = req.params.id
    const updatedData = req.body
    const options = {new:true}
    
    const result = await Model.findByIdAndUpdate(
        id, updatedData, options
    ) 
    res.send(result)
   } catch (error) {
    res.send(400).json({message:error.message})
   }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
   try {
    const id= req.params.id
    const data = await Model.findByIdAndDelete(id)
   } catch (error) {
    res.send(400).json({message:error.message})
   }
})



module.exports = router;