import React from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';

const faqs = [
  {
    question: 'What exactly is the Gemini CLI?',
    answer: 'The Gemini CLI is a powerful, command-line interface that allows developers to interact directly with Google\'s Gemini models. This workshop will teach you how to use it for a variety of generative AI tasks right from your terminal.',
  },
  {
    question: 'Is this event free to attend?',
    answer: 'Yes, this event is completely free for all participants. We are committed to making AI education accessible to everyone.',
  },
  {
    question: 'Who is the target audience for this event?',
    answer: 'This event is open to students, professional developers, and any tech enthusiast interested in learning about the Gemini CLI. A basic understanding of using a command-line interface is helpful but not mandatory.',
  },
  {
    question: 'Do I need to bring my own laptop?',
    answer: 'Yes, a personal laptop is essential for the hands-on coding sessions. Please ensure it is fully charged and you have a modern web browser installed.',
  },
  {
    question: 'Will certificates of participation be provided?',
    answer: 'Yes, all registered attendees who complete the workshop will receive a digital certificate of participation to acknowledge their new skills.',
  },
  {
    question: 'Is there a Code of Conduct?',
    answer: 'Absolutely. All attendees are expected to adhere to the Google Developer Community Code of Conduct to ensure a respectful, inclusive, and collaborative environment for everyone. You can review it at the GDG community website.',
  },
];

const FAQ = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, bgcolor: 'rgba(244, 180, 0, 0.9)', backdropFilter: 'blur(10px)', pointerEvents: 'auto', borderRadius: 4, margin: 2 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: 'white' }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ 
            mb: 1, 
            bgcolor: 'rgba(244, 180, 0, 0.9)', 
            backdropFilter: 'blur(10px)', 
            borderRadius: 4, // 16px
            // This is to ensure the borderRadius is applied correctly on accordions
            '&:before': {
              display: 'none',
            },
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)'
            }
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}n              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography variant="h6" sx={{ color: 'white' }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQ;
