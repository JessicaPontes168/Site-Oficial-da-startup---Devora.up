const faqs = [
    {
        q: "Quanto tempo leva para ficar pronto?",
        a: "O prazo depende da complexidade do projeto e das funcionalidades desejadas. Após entendermos suas necessidades, definimos um cronograma com as etapas de desenvolvimento e a previsão de entrega.",
    },
    {
        q: "O que preciso ter pronto antes de pedir o orçamento?",
        a: "Você não precisa ter tudo definido! Basta ter uma ideia do que deseja criar e dos objetivos do seu negócio. A Devora ajuda a organizar as ideias e definir os detalhes necessários para transformar seu projeto em realidade.",
    },
    {
        q: "A Devora faz sistemas sob medida ou vende sistemas prontos?",
        a: "A Devora desenvolve soluções sob medida, pensadas para as necessidades específicas de cada negócio. Cada projeto é criado de acordo com seus objetivos, processos e identidade, para entregar uma solução que realmente faça sentido para você.",
    },
    {
        q: "E se eu quiser mudar algo depois que o projeto estiver no ar?",
        a: "Seu projeto pode evoluir junto com o seu negócio. Após o lançamento, é possível solicitar ajustes, melhorias e novas funcionalidades, conforme as necessidades e as condições de suporte ou manutenção acordadas.",
    },
    {
        q: "A Devora atende em todas as regiões?",
        a: "Sim! Nossa sede fica em Russas, no Ceará, e atendemos remotamente empresas de todo o Brasil. Assim, podemos desenvolver soluções digitais para clientes de diferentes regiões, mantendo a comunicação e o acompanhamento durante todas as etapas do projeto.",
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