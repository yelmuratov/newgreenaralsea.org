import FaqItem from "../components/faq-item";
import { useAppSelector } from "../hooks/hooks"

const Faq = () => {
  const faqQuestions = useAppSelector(state => state.microServices.faq);
  return (
    <section className="faq-section">
      <div className="container mx-auto pt-24">
      <h2 className="text-center mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>
      <div className="faqs lg:max-w-[1000px] mx-auto">
      {
        faqQuestions.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))
      }
      </div>
      </div>
    </section>
  )
}

export default Faq