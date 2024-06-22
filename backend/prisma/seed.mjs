import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const demoData = {
  contractors: [
    {
      id: 'contractor1',
      name: 'Sanjay dubey',
      email: 'sanjay@gmail.com',
      phone: '1234567890',
      address: 'Bhopal',
    },
    {
      id: 'contractor2',
      name: 'Rahul',
      email: 'rahul@gmail.com',
      phone: '1234567890',
      address: 'Jabalpur',
    },
  ],
  conductors: [
    {
      id: 'conductor1',
      name: 'Shubham',
      phone: '1234567890',
    },
    {
      id: 'conductor2',
      name: 'Rajesh',
      phone: '0987654321',
    },
  ],
  buses: [
    {
      number: 'MP04-1234',
      conductorId: 'conductor1',
      contractorId: 'contractor1',
      capacity: 50,
    },
    {
      number: 'MP04-5678',
      conductorId: 'conductor2',
      contractorId: 'contractor2',
      capacity: 70,
    },
  ],
  schedules: [
    {
      id: 'schedule1',
      busNumber: 'MP04-1234',
      from: 'Rewa Residency',
      to: 'Sadar Bazar',
      checkpoints: ['H4', 'Nescafe', 'Railway Station'],
      departureTime: '3:30 PM',
      ticketPrice: 20,
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
      id: 'schedule2',
      busNumber: 'MP04-5678',
      from: 'Rewa Residency',
      to: 'Sadar Bazar',
      checkpoints: ['H4', 'Nescafe', 'Girls Hostel', 'Reliance Fresh'],
      departureTime: '7:30 PM',
      ticketPrice: 20,
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
  ],
  users: [
    {
      id: 'user1',
      email: 'user1@example.com',
      name: 'User One',
      picture: 'https://example.com/user1.jpg',
      role: 'user',
    },
    {
      id: 'user2',
      email: 'user2@example.com',
      name: 'User Two',
      picture: 'https://example.com/user2.jpg',
      role: 'user',
    },
  ],
  orders: [
    {
      id: 'order1',
      userId: 'user1',
      scheduleId: 'schedule1',
      status: 'confirmed',
      amount: 20,
      attempts: 1,
      receipt: 'receipt123',
    },
    {
      id: 'order2',
      userId: 'user2',
      scheduleId: 'schedule2',
      status: 'confirmed',
      amount: 20,
      attempts: 1,
      receipt: 'receipt456',
    },
  ],
  tickets: [
    {
      orderId: 'order1',
      passengerEmail: ['23bcs256@iiitdmj.ac.in'],
      createdAt: new Date(),
    },
    {
      orderId: 'order2',
      passengerEmail: ['23bcs256@iiitdmj.ac.in'],
      createdAt: new Date(),
    },
  ],
  users: [
    {
      id: 'user1',
      email: '23bcs200@iiitdmj.ac.in',
      name: 'Aditya Verma',
      picture: 'https://example.com/user1.jpg',
      role: "admin",
      createdAt: new Date(),
    },
    {
      id: 'user2',
      email: '23bcs201@iiitdmj.ac.in',
      name: 'Ram Vyas',
      picture: 'https://example.com/user1.jpg',
      role: "user",
      createdAt: new Date(),
    },
  ],
  tickets: [
    {
      orderId: "order1",
      passengerEmail: ['20bce40@iiitdmj.ac.in', '21bme33@iiitdmj.ac.in'],
    }, {
      orderId: "order2",
      passengerEmail: ['20bce40@iiitdmj.ac.in', '21bme33@iiitdmj.ac.in'],
    },
  ],
  orders: [
    {
      id: 'order1',
      userId: 'user2',
      scheduleId: '1',
      status: "pending",
      amount: 100,
      attempts: 0,
      receipt: 'receipt1',
      createdAt: new Date(),
    },
    {
      id: 'order2',
      userId: 'user2',
      scheduleId: '2',
      status: "pending",
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
  await prisma.conductor.deleteMany({});
  await prisma.contractor.deleteMany({});
  await prisma.users.deleteMany({});
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
    data: demoData.users
  })

      await prisma.order.createMany({
        data: demoData.orders
      })

      await prisma.ticket.createMany({
        data: demoData.tickets
      })

  console.log('Seeding done');
  await prisma.$disconnect();
}

seedDb();
