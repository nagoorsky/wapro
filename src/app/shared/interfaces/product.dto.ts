export class Product {
  productId: number;
  productName: string;
  productCode: number;
  operatingSystem: string;
  description: string;
  basePrice: number;
  prgCode: number;
  lastVersion: string;
  lastReleaseDate: string;
  maxNumberOfUsers: number;
  variants: Variant[];
  versions: Version[];
  packets: Packet[];
  agreementCode: string;
  agreementUrl: string;
  agreementDesc: string;
  allowModify: boolean;
  productNameShortcut: string;
  productNameDescription: string;
  productUrl: string;
  packetDescription: string;
  variantDescription: string;
  eduLicenseDescription: string;
  requiredProducts: RequiredProduct[];
}

class Variant {
  variantId: number;
  productId: number;
  variantName: string;
  variantCode: number;
  orderWWW: number;
  maxNumberOfUsers: number;
}

class Version {
  versionId: number;
  productId: number;
  versionNumber: string;
  versionCode: number;
  releaseDate: string;
  number: number;
  compareNumber: number;
}

class Packet {
  packetId: number;
  productId: number;
  packetName: string;
  packetCode: number;
  orderWWW: number;
}

class RequiredProduct {
  requiredProductId: number;
  requiredProductName: string;
}
