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
  await Promise.all(
    demoData.contractors.map(async contractor => {
      await prisma.contractor.create({
        data: contractor,
      });
    })
  );
  await Promise.all(
    demoData.conductors.map(async conductor => {
      await prisma.conductor.create({
        data: conductor,
      });
    })
  );
  await Promise.all(
    demoData.buses.map(async bus => {
      await prisma.bus.create({
        data: bus,
      });
    })
  );
  await Promise.all(
    demoData.schedules.map(async schedule => {
      await prisma.schedule.create({
        data: schedule,
      });
    })
  );
  await Promise.all(
    demoData.users.map(async user => {
      await prisma.users.create({
        data: user,
      });
    })
  );
  await Promise.all(
    demoData.orders.map(async order => {
      await prisma.order.create({
        data: order,
      });
    })
  );
  await Promise.all(
    demoData.tickets.map(async ticket => {
      await prisma.ticket.create({
        data: ticket,
      });
    })
  );
  console.log('Seeding done');
  await prisma.$disconnect();
}

seedDb();
