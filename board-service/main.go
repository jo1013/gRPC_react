package server

import (
	pb "board-service/pb"
	"context"
	"log"
	"net"

	"google.golang.org/grpc"
)

type boardServer struct {
	pb.UnimplementedBoardServiceServer
}

func (s *boardServer) CreateBoard(ctx context.Context, board *pb.BoardMessage) (*pb.BoardMessage, error) {
	// 게시글 생성 로직 구현
}

func StartGRPCServer() {
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
