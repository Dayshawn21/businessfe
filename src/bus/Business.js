import React from 'react';

import IMG1 from '../img/bake.JPEG';
import IMG2 from '../img/DGOLD_BLACK_720x.png';
import IMG3 from '../img/gih.jpg';
import IMG4 from '../img/lg.jpg';
import IMG5 from '../img/tw.jpg';
import IMG6 from '../img/wf.jpg';

const Business = () => {
	return (
		<section className='business p-3 '>
			<h1 className='text-center large py-4'>Entrepreneurs</h1>
			<div className='grid-3 container'>
				<div>
					<img src={IMG1} alt='' />
				</div>
				<div>
					<img src={IMG2} alt='' />
				</div>
				<div>
					<img src={IMG3} alt='' />
				</div>
				<div>
					<img src={IMG4} alt='' />
				</div>
				<div>
					<img src={IMG5} alt='' />
				</div>
				<div>
					<img src={IMG6} alt='' />
				</div>
			</div>
		</section>
	);
};
export default Business;
