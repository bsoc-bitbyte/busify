import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const demoData = {
  contractors: [
    {
      id: '1',
      name: 'Sanjay dubey',
      email: 'sanjay@gmail.com',
      phone: '1234567890',
      address: 'Bhopal',
    },
    {
      id: '2',
      name: 'Rahul',
      email: 'rahul@gmail.com',
      phone: '1234567890',
      address: 'Jabalpur',
    },
  ],
  conductor: [
    {
      id: '1',
      name: 'Shubham',
      phone: '1234567890',
    },
    {
      id: '2',
      name: 'Rajesh',
      phone: '0987654321',
    },
  ],
  bus: [
    {
      number: 'MP04-1234',
      conductorId: '1',
      contractorId: '1',
      capacity: 50,
    },
    {
      number: 'MP04-5678',
      conductorId: '2',
      contractorId: '2',
      capacity: 70,
    },
  ],
  schedule: [
    {
      id: '1',
      busNumber: 'MP04-1234',
      from: 'Rewa Residency',
      to: 'Sadar Bazar',
      checkpoints: ['H4', 'Nescafe', 'Railway Station'],
      departureTime: '3:30 PM',
      ticketPrice: 20,
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
      id: '2',
      busNumber: 'MP04-5678',
      from: 'Rewa Residency',
      to: 'Sadar Bazar',
      checkpoints: ['H4', 'Nescafe', 'Girls Hostel', 'Reliance Fresh'],
      departureTime: '7:30 PM',
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      ticketPrice: 20,
    },
  ],
  users: [
    {
      id: 'user1',
      email: '23bcs200@iiitdmj.ac.in',
      name: 'Aditya Verma',
      picture: 'https://example.com/user1.jpg',
      role: 'admin',
      createdAt: new Date(),
    },
    {
      id: 'user2',
      email: '23bcs201@iiitdmj.ac.in',
      name: 'Ram Vyas',
      picture: 'https://example.com/user1.jpg',
      role: 'user',
      createdAt: new Date(),
    },
  ],
  tickets: [
    {
      orderId: 'order1',
      passengerEmail: ['20bce40@iiitdmj.ac.in', '21bme33@iiitdmj.ac.in'],
      encryptedData:
        'U2FsdGVkX1/jxgl2hfE5FF/O53I1fTXuK1EYCBQsKRoWI2f+MDgy5KQFCq1Dhw4hWPRjNd83/PtRjFXqfeCtsR8jY7E3uSmmLPEd8/AD87k54KW9ShhPVsKxq8xjZVIx',
    },
    {
      orderId: 'order2',
      passengerEmail: ['20bce40@iiitdmj.ac.in', '21bme33@iiitdmj.ac.in'],
      encryptedData:
        'U2FsdGVkX1/jxgl2hfE5FF/O53I1fTXuK1EYCBQsKRoWI2f+MDgy5KQFCq1Dhw4hWPRjNd83/PtRjFXqfeCtsR8jY7E3uSmmLPEd8/AD87k54KW9ShhPVsKxq8xjZVIx',
    },
  ],
  orders: [
    {
      id: 'order1',
      userId: 'user2',
      scheduleId: '1',
      status: 'pending',
      amount: 100,
      attempts: 0,
      receipt: 'receipt1',
      createdAt: new Date(),
    },
    {
      id: 'order2',
      userId: 'user2',
      scheduleId: '2',
      status: 'pending',
      amount: 200,
      attempts: 1,
      receipt: 'receipt2',
      createdAt: new Date(),
    },
  ],
};

async function cleanDb() {
  await prisma.ticket.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.schedule.deleteMany({});
  await prisma.bus.deleteMany({});
  await prisma.users.deleteMany({});
  await prisma.conductor.deleteMany({});
  await prisma.contractor.deleteMany({});
}

async function seedDb() {
  await cleanDb();

  await prisma.contractor.createMany({
    data: demoData.contractors,
  });

  await prisma.conductor.createMany({
    data: demoData.conductor,
  });

  await prisma.bus.createMany({
    data: demoData.bus,
  });

  await prisma.schedule.createMany({
    data: demoData.schedule,
  });

  await prisma.users.createMany({
    data: demoData.users,
  });

  await prisma.order.createMany({
    data: demoData.orders,
  });

  await prisma.ticket.createMany({
    data: demoData.tickets,
  });

  console.log('Seeding done');
  await prisma.$disconnect();
}

seedDb();
