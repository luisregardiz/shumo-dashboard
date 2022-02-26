import { FC } from "react";

import { HiCollection } from "react-icons/hi";

interface NFTTableProps {
    nftsCollections: NFTCollection[];
}

const NFTTable: FC<NFTTableProps> = ({ nftsCollections }) => {
    const formatter = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
    });
    return (
        <div className="bg-shumo-soft-yellow lg:p-10 p-5 rounded-xl shadow-lg text-shumo-soft-brown">
            <div className="flex items-center">
                <HiCollection className="lg:text-2xl text-xl text-shumo-red mr-2" />
                <h4 className="lg:text-2xl text-xl text-shumo-soft-brown font-bold">
                    NFT Wallet Collections
                </h4>
            </div>
            <table className="min-w-full my-5">
                <thead className="uppercase font-bold text-shumo-red lg:text-base text-sm">
                    <tr>
                        <th></th>
                        <th>Collection</th>
                        <th>Balance</th>
                        <th>Floor Value (ETH)</th>
                        <th>Floor Value (BUSD)</th>
                    </tr>
                </thead>
                <tbody className="text-center divide-y divide-shumo-soft-brown">
                    {nftsCollections.map((collection) => (
                        <tr key={collection.name}>
                            <td>
                                <img
                                    src={collection.image_url}
                                    alt={collection.name}
                                    className="h-12 w-12 rounded-full shadow-lg "
                                />
                            </td>
                            <td className="py-5">{collection.name}</td>
                            <td className="py-5">{collection.balance}</td>
                            <td className="py-5">
                                {collection.floor_value_eth.toFixed(6)}
                            </td>
                            <td className="py-5">
                                {formatter.format(
                                    Number(collection.floor_value_busd)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NFTTable;
