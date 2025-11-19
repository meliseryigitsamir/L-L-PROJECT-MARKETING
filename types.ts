export enum CategoryType {
  REPUTATION = 'İtibar ve Algı Yönetimi',
  COMMUNICATION = 'İletişim ve İhmal',
  COGNITIVE = 'Bilişsel Eğilimler',
}

export enum ContextType {
  BUSINESS = 'İş Dünyası / Liderlik',
  SOCIAL = 'Kişisel / Sosyal Hayat',
  GENERAL = 'Genel / Psikolojik',
}

export interface Fallacy {
  id: string;
  name: string;
  latinName?: string;
  category: CategoryType;
  context: ContextType;
  mechanism: string;
  example: string;
  defense: string;
}