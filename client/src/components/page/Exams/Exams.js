<<<<<<< HEAD
=======

>>>>>>> b85f32f8f2998c512dc860db6f6dd0e656f68f60
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react'
import { shadows } from '@mui/system';
import { styled } from "@mui/material/styles";

<<<<<<< HEAD
=======

>>>>>>> b85f32f8f2998c512dc860db6f6dd0e656f68f60
import BasicModal from './ModalAddExam';
import { Link } from 'react-router-dom'
import { api_base } from 'config'
import useExams from './useExams'
import { useNavigate } from 'react-router-dom';
import { pink } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
const Exams = () => {

  const { exams, removeExam } = useExams();
  const navigate = useNavigate()

<<<<<<< HEAD

=======
>>>>>>> b85f32f8f2998c512dc860db6f6dd0e656f68f60
  return (
    <>
      <h1>Exam Manager</h1>
      <BasicModal />

      {exams.map((exam) => (
        <Card
          key={exam._id}
          sx={{
            minWidth: 50,
            margin: 1,
            "&:hover": {
              boxShadow: "0 2px 5px 1px",
<<<<<<< HEAD
              cursor: "pointer"
            }
=======

              cursor: "pointer"
            }

>>>>>>> b85f32f8f2998c512dc860db6f6dd0e656f68f60
          }}
        >
          <CardContent >
            <Typography sx={{ fontSize: 24 }} gutterBottom>
              <Link to={`/teacher/exams/${exam._id}/questions`}
                key={exam.name}
                style={{
                  textDecoration: 'none',
                  color: "black",
<<<<<<< HEAD
                  fontWeight: 'bold'
=======

                  fontWeight: 'bold'

>>>>>>> b85f32f8f2998c512dc860db6f6dd0e656f68f60
                }}
              >
                Exam: {exam.name}
              </Link>
            </Typography>
            <Typography sx={{ fontSize: 20 }} gutterBottom>
              Question: {exam.questions.length}
            </Typography>
            <Typography sx={{ fontSize: 20 }} gutterBottom>
              Passing Score: ??
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>

<<<<<<< HEAD
              Last Edit: {new Date(exam.created).toLocaleDateString('en-US')}
=======

              Last Edit: {new Date(exam.created).toLocaleDateString('en-US')}

>>>>>>> b85f32f8f2998c512dc860db6f6dd0e656f68f60
            </Typography>
            <HighlightOffIcon fontSize="large" sx={{ color: pink[500] }}
              onClick={() => { removeExam(exam._id) }} />
            <BorderColorIcon fontSize="large" sx={{ color: blue[500] }}
              onClick={() => {
                navigate(`/teacher/exams/${exam._id}/questions`)
              }} />
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      ))}

    </>
  )
}

export default Exams