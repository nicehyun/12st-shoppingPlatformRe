import BestProductListSection from "@/features/bestProductList/BestProductListSection"

interface IBastProductListPageProps {
  params: {
    categories: string[] | undefined
  }
}

const BastProductListPage = ({ params }: IBastProductListPageProps) => {
  return <BestProductListSection categoriesPath={params.categories} />
}

export default BastProductListPage
