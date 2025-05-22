'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

// @mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import Typeset from '@/components/Typeset';

export default function DailyPractice() {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack spacing={4}>
        {/* Title */}
        <Typeset
          heading="Daily Practice"
          caption="Sharpen your skills with daily multiple choice questions."
          stackProps={{ sx: { textAlign: 'center', alignItems: 'center' } }}
          headingProps={{ variant: 'h3' }}
        />

        {/* Subject Selection */}
        <Stack spacing={1}>
          <Typography variant="subtitle1" fontWeight={600}>Select Subject</Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined">Subject A</Button>
            <Button variant="outlined">Subject B</Button>
          </Stack>
        </Stack>

        {/* Difficulty Selection */}
        <Stack spacing={1}>
          <Typography variant="subtitle1" fontWeight={600}>Select Difficulty</Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">Easy</Button>
            <Button variant="outlined">Medium</Button>
            <Button variant="outlined">Hard</Button>
          </Stack>
        </Stack>

        {/* Practice Mode */}
        <Stack spacing={1}>
          <Typography variant="subtitle1" fontWeight={600}>Practice Mode</Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined">Timed</Button>
            <Button variant="outlined">Untimed</Button>
          </Stack>
        </Stack>

        {/* Answer Feedback Mode */}
        <Stack direction="row" spacing={2}>
          <Button variant="outlined">Show Answers Immediately</Button>
          <Button variant="outlined">Show Answers at the End</Button>
        </Stack>

        {/* Question Block */}
        <Stack spacing={2}>
          <Typography variant="subtitle1" fontWeight={600}>Question 1</Typography>
          <Typography variant="body1">What is the capital of France?</Typography>

          <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
            <FormControlLabel value="London" control={<Radio />} label="London" />
            <FormControlLabel value="Paris" control={<Radio />} label="Paris" />
            <FormControlLabel value="Berlin" control={<Radio />} label="Berlin" />
            <FormControlLabel value="Rome" control={<Radio />} label="Rome" />
          </RadioGroup>
        </Stack>

        {/* Actions */}
        <Stack direction="row" spacing={2}>
          <Button variant="outlined">Submit</Button>
          <Button variant="contained">Next</Button>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

DailyPractice.propTypes = {};
