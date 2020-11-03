import { useEffect, useState } from "react";
import "./App.css";

function TopScrollbar() {
  const [topInde, setTopInde] = useState("0");
  useEffect(() => {
    const ScrollTop = () => {
      const maxHeightPage = window.document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((window.scrollY / maxHeightPage) * 100);
      setTopInde(scrollPercent);
    };
    window.addEventListener("scroll", ScrollTop);
    return () => window.removeEventListener("scroll", ScrollTop);
  }, []);
  return (
    <div className='app'>
      <div id='top' style={{ width: `${topInde}%` }} className='scrollIndicator'></div>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum
        et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima
        illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem
        quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia
        perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum
        voluptates dolore quaerat iste quae nobis enim animi magni.
      </p>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum
        et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima
        illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem
        quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia
        perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum
        voluptates dolore quaerat iste quae nobis enim animi magni.
      </p>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum
        et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima
        illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem
        quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia
        perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum
        voluptates dolore quaerat iste quae nobis enim animi magni.
      </p>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum
        et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima
        illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem
        quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia
        perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum
        voluptates dolore quaerat iste quae nobis enim animi magni.
      </p>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum
        et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima
        illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem
        quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia
        perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum
        voluptates dolore quaerat iste quae nobis enim animi magni.
      </p>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum
        et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima
        illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem
        quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia
        perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum
        voluptates dolore quaerat iste quae nobis enim animi magni.
      </p>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum
        et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima
        illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem
        quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia
        perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum
        voluptates dolore quaerat iste quae nobis enim animi magni.
      </p>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum
        et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima
        illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem
        quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia
        perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum
        voluptates dolore quaerat iste quae nobis enim animi magni.
      </p>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum
        et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima
        illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem
        quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia
        perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum
        voluptates dolore quaerat iste quae nobis enim animi magni.
      </p>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum
        et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima
        illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem
        quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia
        perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum
        voluptates dolore quaerat iste quae nobis enim animi magni.
      </p>
    </div>
  );
}

export default TopScrollbar;
