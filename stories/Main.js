import React from 'react';
import FullHeader from '../src/Main'; // This is our FullHeader
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
    .add('with title', () => (
        <FullHeader title="TDD" />
    ))
    .add('with title and subtitle', () => (
        <FullHeader title="TDD" subtitle="Curso de JS com TDD na prática" />
    ))
    .add('with title, subtitle and bgColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#329988"
        />
    ))
    .add('with title, subtitle, bgColor and textColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#329988"
            textColor="#FF9900"
        />
    ))
    .add('with title, subtitle, bgColor, textColor and font', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#329988"
            textColor="#FF9900"
            font="cursive"
        />
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
        />
    ))
    .add('with title, subtitle and video', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#329988"
            textColor="#FFF"
            video="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        />
    ))
;
