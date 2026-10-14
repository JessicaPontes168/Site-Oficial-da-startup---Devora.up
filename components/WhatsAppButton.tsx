import { WHATSAPP_URL } from "@/lib/contact";

export default function WhatsAppButton() {
    return (
        <a
            href={WHATSAPP_URL}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com a Devora no WhatsApp"
        >
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
        </a>
    );
}