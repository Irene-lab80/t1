import { FrequentlyAskedQuestion } from "@/components";
import { IFaq } from "@/utils/types";

import style from "./Faq.module.css";

export const Faq = ({ mock_faq }: { mock_faq: IFaq[] }) => (
  <section className={style.faq} id="faq">
    <div className={style.faqInner}>
      <h3 className={style.title}>FAQ</h3>
      <div className={style.faqList}>
        {mock_faq.map((faq) => (
          <FrequentlyAskedQuestion
            answer={faq.answer}
            question={faq.question}
            isOpen={faq.id === 1 ? true : false}
            key={faq.id}
          />
        ))}
      </div>
    </div>
  </section>
);
