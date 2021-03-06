import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Routes } from './routes'
import { breedList } from './list'

const Container = styled.section`
	margin: 0 auto;
	margin: 2em 0;
`
const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const Content = styled.div`
	flex-basis: calc(1/3*100% - (1/3)*4px);
	text-align: center;
	vertical-align: middle;
	position: relative;
	margin: 0 2px 2px 0;
	:nth-child(3n) {
		margin-right: 0;
	}
	:before {
		content: '';
		float: left;
		padding-top: 100%;
	}
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${(props) => props.item});
`
const Overlay = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
`
const BreedLink = styled(Link)`
	margin: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	color: white;
	font-weight: 700;
	font-size: 14px;
	text-decoration: none;
`
const Title = styled.div`
	border-bottom: 1px solid #ddd;
	padding: 0 20px;
	p {
		margin-bottom: 5px;
	}
`

const Block = ({ title, items, type }) => {
	return (
		<Container>
			<Title>
				<p>{title.replace(/^./, title[0].toUpperCase())}</p>
			</Title>
			{type === 'image' ? (
				<Wrap>{items.map((item, index) => <Content key={index} item={item} />)}</Wrap>
			) : (
				<Wrap>
					{items.map((item, index) => (
						<Content key={index} item={breedList[item]}>
							<Overlay>
								<BreedLink to={Routes.showBreedDetail(item)}>
									{item.replace(/^./, item[0].toUpperCase())}
								</BreedLink>
							</Overlay>
						</Content>
					))}
				</Wrap>
			)}
		</Container>
	)
}

export default Block
