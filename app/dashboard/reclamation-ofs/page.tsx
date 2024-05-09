import { getReclamationData } from "@/app/lib/stapiData";

export default async function Page() {
    const {data }= await getReclamationData()
    console.log('data = ',data);
    
    return(
    <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {data?.map(({id,attributes}) => (
                <div
                  key={id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <p>{id}</p>
                      </div>
                      <p className="text-sm text-gray-500">{attributes.OF}</p>
                    </div>
                    
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                        <p>{attributes.Produit}</p>
                      <p className="text-xl font-medium">
                      {attributes.Accessoire}
                      </p>
                      <p>{attributes.Note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                    OF
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                    Produit
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                    Accessoire
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                    Note
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map(({id,attributes}) => (
                <tr
                  key={id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {attributes.OF}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {attributes.Produit}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {attributes.Accessoire}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {attributes.Note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
    </div>
    )
}