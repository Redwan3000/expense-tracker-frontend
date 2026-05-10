import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


import {Dummy_Accounts} from "@/data/accounts";
import {Account} from "@/types/account";

export default async function Accounts({searchParams}: { searchParams: Promise<{ page?: string }> }) {

    const accountsList = Dummy_Accounts;
    const accountPerPage = 12

    const pageNumber = await searchParams;
    const currentPage = Number(pageNumber.page ?? 1);
    const totalPages = Math.ceil(Dummy_Accounts.length / accountPerPage);


    const startingIndex = (currentPage - 1) * accountPerPage;
    const paginatedAccount = Dummy_Accounts.slice(startingIndex, (startingIndex + accountPerPage));


    return (
        <main className={"h-full flex flex-col w-full"}>
            <div className={"min-w-full w-full h-18 mb-3 p-3 flex justify-start bg-[#DEDDCB] rounded-3xl"}>

                <div className={" w-3/12  relative hover:text-[#33450E] text-[#BB9668]"}>
                    <input placeholder={"search Account"}
                           className={"h-12 w-full pl-12 bg-[#F2f2f2] pr-6 rounded-4xl border-2  border-white/60 shadow-md backdrop-blur-sm "}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="size-6 absolute  bottom-3 left-3 ">
                        <path fillRule="evenodd"
                              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
            </div>


            <div className={"flex-1 h-full w-full p-10 border-2 shadow-sm  border-white/60 bg-[#DEDDCB] rounded-xl"}>


                <div className={" p-10 border-2 border-white/60 backdrop-blur-sm  rounded-sm shadow-md"}>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow className={"bg-[#F2f2f2] font-extrabold"}>
                                <TableHead className="text-center">AccountID</TableHead>
                                <TableHead className={"text-center"}>UserID</TableHead>
                                <TableHead className={"text-center"}>Provider</TableHead>
                                <TableHead className="text-center">Method</TableHead>
                                <TableHead className="text-center">Account Number </TableHead>
                                <TableHead className="text-center">Balance</TableHead>
                                <TableHead className="text-center">Status</TableHead>
                                <TableHead className="text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedAccount.map((account) => (

                                    <TableRow key={account.accountId}>
                                        <TableCell className="text-center">{account.accountId}</TableCell>
                                        <TableCell className="text-center">{account.userId}</TableCell>
                                        <TableCell className="text-center">{account.providerName}</TableCell>
                                        <TableCell className="text-center">{account.paymentMethod}</TableCell>
                                        <TableCell className="text-center">{account.accountNumber}</TableCell>
                                        <TableCell
                                            className="text-center"> {account.currentBalance.toString()}Tk</TableCell>
                                        <TableCell className="text-center">{account.status}</TableCell>
                                        <TableCell className="text-center">
                                            <button
                                                className={"bg-[#33450E] border1 border-white/60 rounded-sm backdrop-blur-sm shadow-sm pl-3 hover:animate-pulse hover:-translate-y-0.5 hover:shadow-[#33450E] pr-3 pt-1 pb-1 text-[12px] text-[#DEDDCB]"}>Details
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                            }

                        </TableBody>
                    </Table>
                </div>
                <div className={"flex justify-center mt-5 items-center"}>

                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href={`?page=${Math.max(1,currentPage-1)}`}/>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href={`?page=${1}`}>1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href={`?page=${2}`} isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href={`?page=${3}`}>3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis/>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href={`?page=${Math.min(totalPages,currentPage+1)}`}/>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>

                <div className={"items-end"}><p>page: {currentPage}</p></div>
            </div>
        </main>

    );
}
