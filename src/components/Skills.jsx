import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks & Libraries', items: skills.frameworks },
    { title: 'AI/ML', items: skills.aiMl },
    { title: 'Tools & Platforms', items: skills.tools },
    { title: 'Core Concepts', items: skills.concepts },
  ]

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-card p-6 shadow-card"
            >
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'AWS Certified Cloud Practitioner (CLF-C02)',
              'Microsoft Azure AI-900',
              'NPTEL Python for Data Science (90%)',
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-card p-4 text-center shadow-card"
              >
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

