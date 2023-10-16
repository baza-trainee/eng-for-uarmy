// 'use client';

// import Link from 'next/link';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// import { PDFView } from './PdfView';

// // import { CloseIcon } from '../common/icons';

// import { useBodyScrollLockSimple } from './useBodyScrollLockSimple';


// export const ModalParams = () => {
//   const params = useSearchParams();
//   const router = useRouter();
//   const pathname = usePathname();
//   const document = params.get('document');

//   //const bodyScrollLockRef = useBodyScrollLock(isPaymentSuccess || !!document);
//   useBodyScrollLockSimple(!!document);

//   const handlerShowModal = e => {
//     if (e.target === e.currentTarget) {
//       e.preventDefault();
//       router.push(pathname, { scroll: false });
//     }
//   };

//   return document ? (
//     <section
//       onClick={handlerShowModal}
//       className="duration-250  fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-neutral-75  bg-opacity-30 backdrop-blur-2xl backdrop-filter"
//       //ref={bodyScrollLockRef}
//     >
//       <div
//         className={`scrollbar relative h-screen w-screen overflow-auto rounded-xl bg-white p-12 ${'md:h-[80%] md:w-[80%]'
//         } md:px-[6.85rem] md:py-[12.8rem]`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <Link
//           href={pathname}
//           scroll={false}
//           replace
//           className="absolute right-3 top-3 z-50 cursor-pointer md:right-10 md:top-10 "
//         >
//           <CloseIcon />
//         </Link>
//           <PDFView document={document} />
//       </div>
//     </section>
//   ) : null;
// };