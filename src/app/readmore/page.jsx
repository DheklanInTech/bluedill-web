"use client"
import { useSearchParams } from 'next/navigation';
import NavLight from '../../components/navlight';
import Footer from '../../components/footer';
import Image from 'next/image';
import { featureData } from '../../components/readmoreContent';
import { useState } from 'react';



export default function Page() {
  const [contents, setContents] = useState([]);
  const search = useSearchParams()


  let page = search.get('page');
  const content = featureData.filter(el => el.id == page)

  return (
    <>
      <NavLight />
      {content.map(value => {
        const { id, icon, title, desc, details } = value;
        return <div key={id} className="container w-full relative mt-24 py-8">
          <div className="w-full items-center gap-6 justify-center flex">
            <div className="w-[95%] md:w-[80%]">

              <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{title}</h4>
              <p>{desc}</p>
              <ul>
                {details.map((detail, index) => (
                  <li className="mt-4" key={index} dangerouslySetInnerHTML={{ __html: detail }} />
                ))}
              </ul>


            </div>
          </div>
        </div>
      })}

      <Footer />
    </>
  )
}