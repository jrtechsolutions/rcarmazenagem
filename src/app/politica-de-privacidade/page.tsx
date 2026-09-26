import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o Grupo RC (RC Transportes e RC Armazém) coleta, usa e protege dados pessoais, em conformidade com a LGPD.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <section className="pg-hero">
        <div className="shell">
          <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
            Legal
          </p>
          <h1>Política de Privacidade</h1>
          <p>Última atualização: 23/09/2026</p>
        </div>
      </section>

      <RevealSection className="sec-compact">
        <div className="shell legal-doc">
          <p>
            Esta Política de Privacidade descreve como o Grupo RC (RC Transportes
            e Logística e RC Armazém) coleta, usa e protege os dados pessoais de
            quem visita nossos sites ou solicita nossos serviços, em conformidade
            com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).
          </p>

          <h2>1. Quem somos</h2>
          <p>
            O Grupo RC é formado por RC Transportes e Logística e RC Armazém,
            empresas de transporte e armazenagem de carga regulada com sede em
            São Paulo, SP.
          </p>
          <p>
            <strong>Controlador dos dados:</strong> RC TRANSPORTES LTDA
            <br />
            <strong>CNPJ:</strong> 04.409.228/0001-90
            <br />
            <strong>Endereço:</strong> Av. do Rio Bonito, nº 1.522, Veleiros, São
            Paulo, SP, CEP 04776-002
          </p>

          <h2>2. Quais dados coletamos</h2>
          <p>
            Dados fornecidos diretamente por você, quando preenche um formulário
            no site:
          </p>
          <ul>
            <li>
              Formulário de Orçamento: nome, e-mail, telefone, empresa, tipo de
              carga/serviço de interesse
            </li>
            <li>
              Formulário de Contato: nome, e-mail, telefone, mensagem
            </li>
            <li>
              Formulário de Trabalhe Conosco: nome, e-mail, currículo (arquivo
              PDF), área de interesse
            </li>
          </ul>
          <p>Dados coletados automaticamente, via cookies de análise:</p>
          <ul>
            <li>
              Google Analytics (GA4): páginas visitadas, tempo de navegação,
              origem do acesso, tipo de dispositivo, de forma agregada, sem
              identificar você diretamente
            </li>
          </ul>

          <h2>3. Por que coletamos esses dados</h2>
          <ul>
            <li>Responder solicitação de orçamento ou contato</li>
            <li>Avaliar candidatura enviada via Trabalhe Conosco</li>
            <li>
              Entender como o site é usado, pra melhorar conteúdo e navegação
              (Google Analytics)
            </li>
          </ul>
          <p>
            Não vendemos nem compartilhamos seus dados com terceiros pra fins de
            marketing.
          </p>

          <h2>4. Com quem compartilhamos dados</h2>
          <ul>
            <li>
              Google Analytics (Google LLC): dados de navegação agregados,
              conforme política de privacidade do Google
            </li>
            <li>
              WhatsApp (Meta): se você clicar num link de WhatsApp no site, a
              conversa passa a ser regida pela política de privacidade do
              WhatsApp/Meta, não mais por esta política
            </li>
          </ul>

          <h2>5. Cookies</h2>
          <p>Usamos cookies de dois tipos:</p>
          <ul>
            <li>
              Necessários: essenciais pro funcionamento do site, não podem ser
              desativados
            </li>
            <li>
              Analíticos (Google Analytics): só são ativados com seu
              consentimento, via o banner de cookies exibido na primeira visita
            </li>
          </ul>
          <p>
            Você pode gerenciar ou revogar esse consentimento a qualquer momento
            nas configurações do banner de cookies ou do seu navegador.
          </p>

          <h2>6. Por quanto tempo guardamos seus dados</h2>
          <ul>
            <li>Dados de formulário de orçamento/contato: 60 dias</li>
            <li>Currículos enviados via Trabalhe Conosco: 30 dias</li>
            <li>
              Dados de Google Analytics: conforme configuração de retenção do
              GA4 (padrão: 14 meses)
            </li>
          </ul>

          <h2>7. Seus direitos como titular dos dados</h2>
          <p>Conforme a LGPD, você tem direito a:</p>
          <ul>
            <li>Confirmar a existência de tratamento dos seus dados</li>
            <li>Acessar seus dados</li>
            <li>
              Corrigir dados incompletos, inexatos ou desatualizados
            </li>
            <li>
              Solicitar anonimização, bloqueio ou eliminação de dados
              desnecessários
            </li>
            <li>Solicitar portabilidade dos dados</li>
            <li>Revogar consentimento a qualquer momento</li>
            <li>
              Solicitar informação sobre com quem compartilhamos seus dados
            </li>
          </ul>
          <p>
            Pra exercer qualquer um desses direitos, entre em contato:{" "}
            <a href="mailto:angelica@rctransportes.com.br">
              angelica@rctransportes.com.br
            </a>
          </p>

          <h2>8. Encarregado de Proteção de Dados (DPO)</h2>
          <p>
            <strong>Nome:</strong> Angelica Ferrari dos Santos
            <br />
            <strong>E-mail:</strong>{" "}
            <a href="mailto:angelica@rctransportes.com.br">
              angelica@rctransportes.com.br
            </a>
          </p>

          <h2>9. Alterações nesta política</h2>
          <p>
            Podemos atualizar esta política periodicamente. A data da última
            atualização sempre aparece no topo desta página.
          </p>

          <h2>10. Contato</h2>
          <p>
            Dúvidas sobre esta política:{" "}
            <a href="mailto:angelica@rctransportes.com.br">
              angelica@rctransportes.com.br
            </a>{" "}
            ou pelo formulário de{" "}
            <Link href="/contato">Contato</Link>.
          </p>
        </div>
      </RevealSection>
    </>
  );
}
