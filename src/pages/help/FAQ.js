import { useEffect, useState } from 'react';
import { Page } from '../general';

const faq = [
  {
    id: 1,
    name: 'Geral',
    items: [
      {
        id: 1,
        question: 'Como eu faço alguma coisa?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
      },
      {
        id: 2,
        question: 'Como eu faço alguma coisa 2?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
      },
      {
        id: 3,
        question: 'Como eu faço alguma coisa 3?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
      },
      {
        id: 4,
        question: 'Como eu faço alguma coisa 4?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
      },
      {
        id: 5,
        question: 'Como eu faço alguma coisa 5?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
      },
      {
        id: 6,
        question: 'Como eu faço alguma coisa 6?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
      },
    ],
  },
  {
    id: 2,
    name: 'Postos',
    items: [
      {
        id: 1,
        question: 'Como eu faço alguma coisa?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
      },
    ],
  },
  {
    id: 3,
    name: 'Clientes',
    items: [
      {
        id: 1,
        question: 'Como eu faço alguma coisa?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
      },
    ],
  },
  {
    id: 4,
    name: 'Abastecimentos',
    items: [
      {
        id: 1,
        question: 'Como eu faço alguma coisa?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
      },
    ],
  },
  {
    id: 5,
    name: 'Faturamentos',
    items: [
      {
        id: 1,
        question: 'Como eu faço alguma coisa?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
      },
    ],
  },
];

const OpenIcon = () => {
  return (
    <svg
      className='flex-shrink-0 w-6 h-6 text-amber-500'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 12H4' />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='flex-shrink-0 w-6 h-6 text-amber-500'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' />
    </svg>
  );
};

const FAQ = () => {
  const [category, setCategory] = useState();
  const [question, setQuestion] = useState();

  const changeCategory = (id) => {
    setCategory(id);
    setQuestion();
  };

  useEffect(() => {
    setCategory(1);
  }, []);

  const Content = ({ items }) => {
    return (
      <div className='mx-12'>
        <div className='space-y-4'>
          {items.map((x) => (
            <button
              key={x.id}
              className={`block hover:underline hover:cursor-pointer ${
                category === x.id ? 'font-bold text-amber-500 underline' : 'text-slate-500'
              }`}
              onClick={() => changeCategory(x.id)}
            >
              {x.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const Item = ({ item }) => {
    return (
      <>
        <div>
          <button
            onClick={() => question !== item.id ? setQuestion(item.id) : setQuestion()}
            className='flex items-center focus:outline-none'
          >
            {question && question === item.id ? <OpenIcon /> : <CloseIcon />}
            <h1 className='mx-4 text-xl text-slate-800'>{item.question}</h1>
          </button>
          {question && question === item.id && (
            <div className='flex mt-4 md:mx-10'>
              <span className='border border-amber-500' />
              <p className='max-w-3xl px-4 text-slate-500'>{item.text} </p>
            </div>
          )}
        </div>
        <hr className='my-4 border-slate-200' />
      </>
    );
  };

  return (
    <Page>
      <section className='bg-white flex flex-grow w-full'>
        <div className='container mx-auto mt-32 md:mt-20 px-4'>
          <h1 className='text-2xl md:text-3xl font-semibold text-center text-slate-800'>
            Perguntas Frequentes
          </h1>
          <div className='mt-8 xl:mt-16 md:flex md:-mx-12'>
            <Content items={faq} />
            <div className='flex-1 mt-8 md:mx-12 md:mt-0'>
              {category &&
                (faq.find((f) => f.id === category)?.items || []).map((x) => (
                  <Item key={x.id} item={x} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default FAQ;
