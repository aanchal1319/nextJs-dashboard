import CustomersTable from "@/app/ui/customers/table"
import { fetchCustomers } from "@/app/lib/data"

export default async  function Page(props: {
  searchParams?: Promise<{
    query?: string;
   
  }>;
}){
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  return (
    <div><CustomersTable query={query}/></div>
  )
}