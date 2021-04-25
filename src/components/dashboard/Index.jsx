import React, { useEffect } from 'react'
import { products } from '../../dummyData/products'


function Index() {
	

	useEffect(() => {
    console.log(products);
  });

	return (
		<>
			<div className="text-center">
				<h3>Производство</h3>
			</div>

			<div className="header-buttons d-flex flex-wrap justify-content-center mb-3">
				<button className="btn-sm btn-success mr-4">Приготовление смеси</button>
				<button className="btn-sm btn-warning mr-4">Очистить</button>
				<button className="btn-sm btn-danger">Удалить</button>
			</div>

			<div className="row mb-3">
				<div className="col-md-4">
					<div className="d-flex">
						<div className="vertical-center w-50 mr-4">Тип ГП: </div>
						<div className="w-50">
							<select name="" className="custom-select">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
							</select>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="d-flex">
						<div className="vertical-center w-50 mr-4">Ответственный: </div>
						<div className="w-50">
							<select name="" className="custom-select">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
							</select>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="d-flex">
						<div className="vertical-center w-50 mr-4">Число: </div>
						<div className="w-50">
							<input type="text" className="form-control" />
						</div>
					</div>
				</div>
			</div>

			<div className="row mb-3">
					<div className="col-md-4">
						<div className="d-flex">
							<div className="vertical-center w-50 mr-4">Наименование товара:</div>
							<div className="w-50">
								<input type="text" className="form-control" />
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="d-flex">
							<div className="vertical-center w-50 mr-4">Вес замеса:</div>
							<div className="w-50">
								<input type="text" className="form-control" />
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="d-flex">
							<div className="vertical-center w-50 mr-4">День:</div>
							<div className="w-50">
								<input type="text" className="form-control" />
							</div>
						</div>
					</div>
				</div>

			<div className="row">
				{
					products.map((item, index) => 
						<div className="col-md-4" key={index}>
							<div className="d-flex">
								<div className="w-50">
									<div className="vertical-center h-100">
										<div className="d-flex justify-content-between">
											<strong>{ index + 1 }</strong>
											<span>{ item.name }</span>
										</div>
									</div>
								</div>
								<div className="w-50">
									<input type="text" className="form-control"/>
								</div>
							</div>
						</div>
					)
				}
			</div>
		</>
	)
}

export default Index
