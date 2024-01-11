package server

import (
	"board-service/model"
	pb "board-service/pb"
	"context"
	"log"
	"net"

	"google.golang.org/grpc"
)

type boardServer struct {
	pb.UnimplementedBoardServiceServer
}

func (s *boardServer) CreateBoard(ctx context.Context, req *pb.BoardMessage) (*pb.BoardMessage, error) {
	board := model.Board{
		ID:      req.Id, // ID는 자동 생성되거나 클라이언트에서 전달될 수 있습니다.
		Title:   req.Title,
		Content: req.Content,
		Author:  req.Author,
	}

	err := model.CreateBoard(&board)
	if err != nil {
		return nil, err
	}

	return &pb.BoardMessage{
		Id:      board.ID,
		Title:   board.Title,
		Content: board.Content,
		Author:  board.Author,
	}, nil
}

func StartGRPCServer() {
	model.InitDB("your_postgres_connection_string")

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterBoardServiceServer(s, &boardServer{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
