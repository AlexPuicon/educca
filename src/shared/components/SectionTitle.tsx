interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>}
      <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
    </div>
  );
};

export default SectionTitle;