import { motion } from 'framer-motion';
import { ScrollReveal } from '@/hooks/useScrollReveal';
import categoryIndustrial from '@/assets/category-industrial.jpg';
import categoryElectronics from '@/assets/category-electronics.jpg';
import categoryMachinery from '@/assets/category-machinery.jpg';
import categoryMaterials from '@/assets/category-materials.jpg';
import categoryConsumer from '@/assets/category-consumer.jpg';

const categories = [
  {
    image: categoryIndustrial,
    title: 'Industrial Goods',
    description: 'Heavy machinery and equipment',
  },
  {
    image: categoryElectronics,
    title: 'Electronics',
    description: 'Consumer and industrial electronics',
  },
  {
    image: categoryMachinery,
    title: 'Machinery',
    description: 'Manufacturing and processing equipment',
  },
  {
    image: categoryMaterials,
    title: 'Raw Materials',
    description: 'Textiles, metals, and chemicals',
  },
  {
    image: categoryConsumer,
    title: 'Consumer Products',
    description: 'Retail and household items',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-light/15 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-light/10 rounded-full blur-3xl"
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-light/30 text-cyan-dark text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Product Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We handle all major product categories from trusted manufacturers
          </p>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <ScrollReveal key={index} direction="scale" delay={index * 100}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image */}
                <motion.img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.95 }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <motion.h3 
                    className="text-white font-bold text-lg mb-1"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {category.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white/80 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {category.description}
                  </motion.p>
                </div>

                {/* Border glow on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{ borderColor: 'hsl(190 70% 60% / 0.7)' }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
