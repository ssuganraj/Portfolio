export const projects = [
  {
    id: 'agriculture-enhancement',
    title: 'Agriculture Enhancement Platform',
    summary: 'Farmer-to-customer platform with an AI chatbot powered by Mixtral 7B and LangChain for agriculture queries. Includes plant disease prediction using CNNs and real-time weather & government API integrations.',
    tech: [
      'Python',
      'Generative AI',
      'LangChain',
      'CNN',
      'Streamlit',
      'GroqCloud Mixtral 7B',
    ],
    highlights: [
      {
        label: 'Problem',
        text: 'Farmers need accessible agricultural advice and disease detection tools.',
      },
      {
        label: 'Approach',
        text: 'Built AI chatbot with Mixtral 7B + LangChain for queries, CNN for plant disease detection, and integrated real-time APIs.',
      },
      {
        label: 'Result',
        text: 'Integrated chatbot + CNN for plant disease detection; improved farmer access to advice and product listings.',
      },
    ],
    demo: '/demos/agri',
    github: 'https://github.com/ssuganraj',
  },
  {
    id: 'serverless-ai-deployment',
    title: 'Serverless AI Model Deployment with CI/CD',
    summary: 'Built scalable NLP pipeline for sentiment analysis achieving 89% accuracy. Deployed models using Azure Functions with CI/CD to reduce deployment effort and costs.',
    tech: ['ML', 'NLP', 'Azure Functions', 'Streamlit', 'Scikit-learn'],
    highlights: [
      {
        label: 'Problem',
        text: 'Need scalable, cost-effective deployment for NLP models with minimal manual effort.',
      },
      {
        label: 'Approach',
        text: 'Built sentiment analysis pipeline (89% accuracy) and deployed using Azure Functions with automated CI/CD.',
      },
      {
        label: 'Result',
        text: 'Production-ready serverless deployment with automated CI/CD.',
      },
    ],
    demo: null,
    github: 'https://github.com/ssuganraj',
  },
  {
    id: 'code-generator-rag',
    title: 'Code Generator System using LLMs and RAG',
    summary: 'Built retrieval-augmented code generation using Llama and LangChain Agents; integrated Chromadb for vector search and prompt engineering to optimize responses.',
    tech: [
      'Llama',
      'RAG',
      'LangChain',
      'Chromadb',
      'Streamlit',
      'Groq API',
    ],
    highlights: [
      {
        label: 'Problem',
        text: 'Need efficient code generation with context-aware responses using LLMs.',
      },
      {
        label: 'Approach',
        text: 'Implemented RAG system with Llama, LangChain Agents, Chromadb for vector search, and optimized prompts.',
      },
      {
        label: 'Result',
        text: 'Workflow enabling efficient similarity search and improved LLM outputs.',
      },
    ],
    demo: null,
    github: 'https://github.com/ssuganraj',
  },
]

