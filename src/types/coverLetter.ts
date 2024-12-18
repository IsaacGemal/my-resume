export type CoverLetterData = {
  id: string;
  company: string;
  position: string;
  recipientTitle?: string;
  companyAddress?: string;
  date: Date;
  content: {
    opening: string;
    body: string[];
    closing: string;
  };
  createdAt: Date;
  updatedAt: Date;
};
