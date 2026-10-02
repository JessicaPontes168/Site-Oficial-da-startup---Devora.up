const faqs = [
    {
        q: "Quanto tempo leva para ficar pronto?",
        a: "ESCREVA AQUI o prazo real.",
    },
    {
        q: "O que preciso ter pronto antes de pedir o orçamento?",
        a: "ESCREVA AQUI o que o cliente precisa levar.",
    },
    {
        q: "Como funciona o pagamento?",
        a: "ESCREVA AQUI como é o pagamento.",
    },
    {
        q: "E se eu quiser mudar algo depois que o projeto estiver no ar?",
        a: "ESCREVA AQUI como funcionam os ajustes.",
    },
];

export default function Faq() {
    return (
        <section className="faq section" id="perguntas-frequentes">
            <div className="section-title">
                <span>Perguntas frequentes</span>
                <h2>O que costumam nos perguntar antes de começar</h2>
            </div>
            <div className="faq-list">
                {faqs.map((item) => (
                    <details className="faq-item" key={item.q}>
                        <summary>{item.q}</summary>
                        <p>{item.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}