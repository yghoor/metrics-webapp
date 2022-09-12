/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';

export const handlers = [
  rest.get('https://financialmodelingprep.com/api/v4/revenue-geographic-segmentation', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        '2021-09-25': {
          CHINA: 68366000000,
          'Other Countries': 163648000000,
          'UNITED STATES': 133803000000,
          'Americas Segment': 153306000000,
          'Europe Segment': 89307000000,
          'Greater China Segment': 68366000000,
          'Japan Segment': 28482000000,
          'Rest of Asia Pacific Segment': 26356000000,
        },
      }, {
        '2020-09-26': {
          CHINA: 40308000000,
          'Other Countries': 125010000000,
          'UNITED STATES': 109197000000,
          'Americas Segment': 124556000000,
          'Europe Segment': 68640000000,
          'Greater China Segment': 40308000000,
          'Japan Segment': 21418000000,
          'Rest of Asia Pacific Segment': 19593000000,
        },
      }, {
        '2019-09-28': {
          CHINA: 43678000000,
          'Other Countries': 114230000000,
          'UNITED STATES': 102266000000,
          'Americas Segment': 116914000000,
          'Europe Segment': 60288000000,
          'Greater China Segment': 43678000000,
          'Japan Segment': 21506000000,
          'Rest of Asia Pacific Segment': 17788000000,
        },
      }, {
        '2018-09-29': {
          CHINA: 51942000000,
          'Other Countries': 115592000000,
          'UNITED STATES': 98061000000,
          'Americas Segment': 112093000000,
          'Europe Segment': 62420000000,
          'Greater China Segment': 51942000000,
          'Japan Segment': 21733000000,
          'Rest of Asia Pacific Segment': 17407000000,
        },
      }, {
        '2017-09-30': {
          CHINA: 44764000000,
          'Other Countries': 100131000000,
          'UNITED STATES': 84339000000,
          'Americas Segment': 96600000000,
          'Europe Segment': 54938000000,
          'Greater China Segment': 44764000000,
          'Japan Segment': 17733000000,
          'Rest of Asia Pacific Segment': 15199000000,
        },
      }, {
        '2016-09-24': {
          CHINA: 46349000000,
          'Other Countries': 93623000000,
          'UNITED STATES': 75667000000,
          'Americas Segment': 86613000000,
          'Europe Segment': 49952000000,
          'Greater China Segment': 48492000000,
          'Japan Segment': 16928000000,
          'Rest of Asia Pacific Segment': 13654000000,
        },
      }, {
        '2015-09-26': {
          CHINA: 56547000000,
          'Other Countries': 95436000000,
          'UNITED STATES': 81732000000,
          'Americas Segment': 93864000000,
          'Europe Segment': 50337000000,
          'Greater China Segment': 58715000000,
          'Japan Segment': 15706000000,
          'Rest of Asia Pacific Segment': 15093000000,
        },
      }, {
        '2014-09-27': {
          CHINA: 30638000000,
          'Other Countries': 83248000000,
          'UNITED STATES': 68909000000,
          'Americas Segment': 65232000000,
          'Europe Segment': 40929000000,
          'Greater China Segment': 29846000000,
          'Japan Segment': 14982000000,
          'Rest of Asia Pacific Segment': 10344000000,
        },
      }, {
        '2013-09-28': {
          'C N': 25946000000,
          'Other Countries': 78767000000,
          'U S': 66197000000,
          Americas: 62739000000,
          'Asia Pacific': 11181000000,
          Europe: 37883000000,
          'Greater China': 25417000000,
          'J P': 13462000000,
        },
      }, {
        '2012-09-29': {
          'C N': 22797000000,
          'Other Countries': 72762000000,
          'U S': 60949000000,
          Americas: 57512000000,
          'Asia Pacific': 33274000000,
          Europe: 36323000000,
          'J P': 10571000000,
        },
      }, {
        '2011-09-24': {
          Americas: 38315000000,
          'Asia-Pacific': 22592000000,
          Europe: 27778000000,
          Japan: 5437000000,
        },
      },
    ]),
  )),
];
