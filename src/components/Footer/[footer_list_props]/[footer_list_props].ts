interface ListProps {
  label: string
}

const LINKS_PRINCIPAIS: Array<ListProps> = [
  { label: 'Home' },
  { label: 'Ferramenta' },
  { label: 'Preços' },
  { label: 'Contato' },
]

const CASES: Array<ListProps> = [
  { label: 'Geração de Leads B2B' },
  { label: 'Geração de Leads em Software' },
  { label: 'Geração de Leads em Imobiliária' },
  { label: 'Cases de Sucesso' },
]

const MATERIAIS: Array<ListProps> = [
  { label: 'Blog' },
  { label: 'Parceria com Agências' },
  { label: 'Guia Definitivo do Marketing' },
  { label: 'Materiais Gratuitos' },
]

export { LINKS_PRINCIPAIS, CASES, MATERIAIS }
