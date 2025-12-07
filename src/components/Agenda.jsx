import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import EventIcon from '@mui/icons-material/Event';
import CodeIcon from '@mui/icons-material/Code';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import { useTheme } from '@mui/material/styles';

const Agenda = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, bgcolor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', pointerEvents: 'auto', borderRadius: 4, margin: 2 }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 6, color: 'white' }}>
          Event Agenda
        </Typography>
        <Timeline position="alternate">
          <TimelineItem sx={{ 
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)'
            }
          }}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="rgba(255, 255, 255, 0.9)"
            >
              2:00 PM - 2:15 PM
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'white' }} />
              <TimelineDot color="primary">
                <EventIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'white' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" color="white">
                Welcome & Introduction
              </Typography>
              <Typography color="rgba(255, 255, 255, 0.9)">Opening remarks and overview of the Gemini CLI.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem sx={{ 
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)'
            }
          }}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="rgba(255, 255, 255, 0.9)"
            >
              2:15 PM - 3:30 PM
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'white' }} />
              <TimelineDot color="secondary">
                <CodeIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'white' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" color="white">
                Live Demo & Hands-on Session
              </Typography>
              <Typography color="rgba(255, 255, 255, 0.9)">Interactive session on building with the Gemini CLI.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem sx={{ 
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)'
            }
          }}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="rgba(255, 255, 255, 0.9)"
            >
              3:30 PM - 4:00 PM
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'white' }} />
              <TimelineDot color="warning">
                <FreeBreakfastIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'white' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" color="white">
                Break & Networking
              </Typography>
              <Typography color="rgba(255, 255, 255, 0.9)">A short break for refreshments and networking with peers.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem sx={{ 
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)'
            }
          }}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="rgba(255, 255, 255, 0.9)"
            >
              4:00 PM - 4:45 PM
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'white' }} />
              <TimelineDot color="error">
                <QuestionAnswerIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'white' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" color="white">
                Q&A and Closing Remarks
              </Typography>
              <Typography color="rgba(255, 255, 255, 0.9)">Answering your questions and wrapping up the event.</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
};

export default Agenda;
