import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Accordion, Icon, Table, Segment } from "semantic-ui-react";
import Condition from "../../../components/General/Condition";
import CardHeader from "./CardHeader";
import ContactDetails from "./ContactDetails";
import "./styles.scss";

const SearchTitle = props => {
    return (
        <Table.Row>
            <Table.Cell width="five">
                <a href="# ">{props.name}</a>
            </Table.Cell>
            <Table.Cell width="five">{props.role}</Table.Cell>
            <Table.Cell width="five">{props.contact}</Table.Cell>
            <Table.Cell width="five">{props.agentContact}</Table.Cell>
            <Table.Cell width="five">
                <Icon name="dropdown" />
            </Table.Cell>
        </Table.Row>
    );
};

const RenderAccordionContent = props => {
    return (
        <Table.Row className="render-accordion-row">
            <Table.Cell colSpan="5" className="render-accordion-cell">
                <ContactDetails
                  className={classNames(
                        {
                            active: props.isActive
                        },
                        "custom-accordion-container"
                    )}
                  isAction={props.isActive}
                />
            </Table.Cell>
        </Table.Row>
    );
};

const RenderShowContact = props => {
    const activeIndex = 100;
    return (
        <Segment.Group className="render-show-contact-container">
            <CardHeader title={props.showName} resultCount={props.contactCount} />
            <Segment attached className="segment-container">
                <Table unstackable basic className="minimalTable table-container">
                    <Table.Header>
                        <Table.Row>
                            {props.headerColumnArr.map(tableHeaderObj => {
                                return (
                                    <Table.HeaderCell width={tableHeaderObj.width}>
                                        {tableHeaderObj.name}
                                    </Table.HeaderCell>
                                );
                            })}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {props.contactArr.map(contactObj => {
                            return (
                                <Fragment key={contactObj.id}>
                                    <SearchTitle {...contactObj} />
                                    <Condition when={props.activeIndex === contactObj.id}>
                                        <RenderAccordionContent
                                          isActive={props.activeIndex === contactObj.id}
                                        />
                                    </Condition>
                                </Fragment>
                            );
                        })}
                    </Table.Body>
                </Table>
            </Segment>
        </Segment.Group>
    );
};

RenderShowContact.prototypes = {
    headerColumnArr: PropTypes.oneOfType([PropTypes.array]),
    showName: PropTypes.string,
    contactCount: PropTypes.number,
    activeIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RenderShowContact.defaultProps = {
    showName: "CBS This Morning",
    contactCount: "5",
    headerColumnArr: [],
    activeIndex: "contact-id-2",
    contactArr: [
        {
            id: "contact-id-1",
            name: "Mason Dean",
            role: "Anchor",
            contact: "January 2020",
            agentContact: "Seymour Eli"
        },
        {
            id: "contact-id-2",
            name: "Elana Gish",
            role: "	Reporter",
            contact: "	April 2019",
            agentContact: "	Steven Lee"
        }
    ]
};

export default RenderShowContact;
